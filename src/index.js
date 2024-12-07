import { getPhotos } from "./API/fetch-img";
import { markupGallery } from "./JS/markup";

const form = document.querySelector('#search-form');
const inputEl = document.querySelector('input[name="searchQuery"]');
const galleryEl = document.querySelector('.gallery');
const btnLoadMore = document.querySelector('.js-load');


let currentPage = 1;

form.addEventListener('submit', onSubmit)
btnLoadMore.addEventListener('click', onLoad);

function onLoad() {
    currentPage += 1;
    getPhotos(currentPage).then(data => {
        const markup = markupGallery(data.hits);
        galleryEl.insertAdjacentHTML('beforeend', markup);
    });
}

function onSubmit(event) {
    event.preventDefault();

    const query = inputEl.value.trim();

    getPhotos(query).then(data => {
        const markup = markupGallery(data.hits);
        galleryEl.insertAdjacentHTML('beforeend', markup);
        btnLoadMore.hidden = false;
    }).catch(e => console.log(e)).finally(form.reset());
}