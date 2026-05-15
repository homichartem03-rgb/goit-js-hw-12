import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '55831399-c8952df427389e36f7129bddd';

export async function getImagesByQuery(query, page) {
  const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page,
        per_page: 15,
      },
    })

    return response.data;
}
