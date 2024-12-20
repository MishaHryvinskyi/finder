function markupGallery(data) {
    return data.map(({ 
        webformatURL, 
        largeImageURL, 
        likes, 
        comments, 
        views, 
        tags, 
        downloads 
    }) => `
    <div class="photo-card">
        <a href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags}" loading="lazy" />
            <div class="info">
                <p class="info-item">
                <b>Likes: ${likes}</b>
                </p>
                <p class="info-item">
                <b>Views: ${views}</b>
                </p>
                <p class="info-item">
                <b>Comments: ${comments}</b>
                </p>
                <p class="info-item">
                <b>Downloads: ${downloads}</b>
                </p>
            </div>
        </a>
    </div>
`).join('')
};

export { markupGallery }