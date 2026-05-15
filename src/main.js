import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import { clearGallery, createGallery, showLoader, hideLoader, } from './js/render-functions.js';

const form = document.querySelector('.form');

form.addEventListener('submit', onSearchFormSubmit);

function onSearchFormSubmit(event) {
    event.preventDefault();

    const searchQuery = event.target.elements['search-text'].value.trim();

    if (searchQuery === '') {
        return;
    }

    clearGallery();
    showLoader();

    getImagesByQuery(searchQuery)
        .then(data => {
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
        })
        .catch(error => {
            hideLoader();
            
        iziToast.error({
             message: 'Something went wrong. Please try again!',
             position: 'topRight',
      });
   });
}