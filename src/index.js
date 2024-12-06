import { getPhotos } from "./API/fetch-img";
import { markupGallery } from "./JS/markup";

const form = document.querySelector('#search-form');
const inputEl = document.querySelector('input[name="searchQuery"]');
const galleryEl = document.querySelector('.gallery');

form.addEventListener('submit', onSubmit)

function onSubmit(event) {
    event.preventDefault();
    
    const query = inputEl.value.trim();

    getPhotos(query).then(data => {
        const markup = markupGallery(data.hits);
        galleryEl.innerHTML= markup;
    }).catch(e => console.log(e)).finally(form.reset());
}