import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  clearGallery,
  createGallery,
  showLoader,
  hideLoader,
  showLoadMoreBtn,
  hideLoadMoreBtn,
} from './js/render-functions.js';

const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more-btn');
let currentPage = 1;
let currentQuery = '';
let loadedImages = 0;

form.addEventListener('submit', onSearchFormSubmit);
loadMoreBtn.addEventListener('click', onLoadMore);

async function onSearchFormSubmit(event) {
  event.preventDefault();

  const searchQuery = event.target.elements['search-text'].value.trim();

  if (searchQuery === '') {
    return;
  }

  currentQuery = searchQuery;

  currentPage = 1;

  clearGallery();
  hideLoadMoreBtn();
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);

    hideLoader();

    if (data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });

      return;
    }

    createGallery(data.hits);

    loadedImages = data.hits.length;

    if (loadedImages >= data.totalHits) {
      hideLoadMoreBtn();

      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    } else {
      showLoadMoreBtn();
    }
  } catch (error) {
    hideLoader();

    iziToast.error({
      message: 'Something went wrong. Please try again!',
      position: 'topRight',
    });
  }
}

async function onLoadMore() {
  currentPage += 1;

  showLoader();
  hideLoadMoreBtn();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);

    hideLoader();

    createGallery(data.hits);

    const galleryItem = document.querySelector('.gallery-item');

    const cardHeight = galleryItem.getBoundingClientRect().height;

    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });

    loadedImages += data.hits.length;

    if (loadedImages >= data.totalHits) {
      hideLoadMoreBtn();

      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    } else {
      showLoadMoreBtn();
    }
  } catch (error) {
    hideLoader();

    iziToast.error({
      message: 'Something went wrong. Please try again!',
      position: 'topRight',
    });
  }
}
