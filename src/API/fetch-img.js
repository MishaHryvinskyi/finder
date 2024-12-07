import axios from "axios";

const API = 'https://pixabay.com/api/'
const API_KEY = '35643945-433c06e40cd86730ec72beccd';
const PER_PAGE = 40;

async function getPhotos(q, page = 1) {
    if(!q) {
        return
    }
    try {
        const response = await axios.get(`${API}?key=${API_KEY}&q=${q}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${PER_PAGE}&page=${page}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching photos:', error.message);
        throw error; 
    }
}

export { getPhotos }