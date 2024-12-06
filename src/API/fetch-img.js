import axios from "axios";

const API = 'https://pixabay.com/api/'
const API_KEY = '35643945-433c06e40cd86730ec72beccd';

async function getPhotos(q) {
    const response = await axios.get(`${API}?key=${API_KEY}&q=${q}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40`);
    return response.data;
}

export { getPhotos }