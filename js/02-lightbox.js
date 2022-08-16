import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector ('.gallery')
const cardsGallery = gallaryCreateItem (galleryItems)
galleryContainer.insertAdjacentHTML ('beforeEnd', cardsGallery)

function gallaryCreateItem (galleryItems) {
    return galleryItems.map (({preview, original, description}) => {
        return `
        <li class = "gallery__item">
        <a class="gallery__item" href="${original}">
            <img class="gallery__image"
                src="${preview}"
                alt="${description}" 
                 />
        </a>
        </li>
        `
    }).join ('')
}

var lightbox = new SimpleLightbox ('.gallery a', {
    captionsData: `alt`,
    captionDelay: 250
})
console.log(galleryItems);
