import Notiflix from "notiflix";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { getPhotos } from "./API/fetch-img";
import { markupGallery } from "./JS/markup";

const form = document.querySelector('#search-form');
const inputEl = document.querySelector('input[name="searchQuery"]');
const galleryEl = document.querySelector('.gallery');
const btnLoadMore = document.querySelector('.js-load');

const simplelightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
})

let currentPage = 1;
let currentQery = '';

form.addEventListener('submit', onSubmit);
btnLoadMore.addEventListener('click', onLoad);

function onLoad() {
    currentPage += 1;
    getPhotos(currentQery, currentPage).then(({ total, totalHits, hits }) => {
        galleryEl.insertAdjacentHTML('beforeend', markupGallery(hits));
        simplelightbox.refresh();
        if(totalHits === total) {
            btnLoadMore.hidden = true;
        }  
    }).catch(onError);
}

function onSubmit(event) {
    event.preventDefault();

    galleryEl.innerHTML = '';

    currentPage = 1;
    currentQery = inputEl.value.trim();

    if(currentQery) {
        Notiflix.Notify.success('Sol lucet omnibus');
    } else {
        Notiflix.Notify.failure('Qui timide rogat docet negare');
    }

    getPhotos(currentQery)
    .then(({ totalHits, total, hits }) => {
        galleryEl.insertAdjacentHTML('beforeend', markupGallery(hits));
        simplelightbox.refresh();
        if(totalHits !== total) {
            btnLoadMore.hidden = false;
        }  
    }).catch(onError);
}

function onError() {
    return galleryEl.innerHTML = `<h2>За запитом ${currentQery} нічого не знайдено</h2>`
}