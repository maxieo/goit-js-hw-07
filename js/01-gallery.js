import { galleryItems } from './gallery-items.js';
// Change code below this line
// 1---------
const galleryContainer = document.querySelector ('.gallery')
const cardsGallery = gallaryCreateItem (galleryItems)
galleryContainer.insertAdjacentHTML ('beforeEnd', cardsGallery)

function gallaryCreateItem (galleryItems) {
    return galleryItems.map (({preview, original, description}) => {
        return `
        <div class = "gallery__item">
            <a class = "gallery__link" href = "${original}">
                <img 
                    class = "gallery__image"
                    src = "${preview}" 
                    data-source = "${original}"
                    alt = "${description}" 
                />
            </a> 
        </div>
        `
    }).join ('')
}


// 2---------------
 
galleryContainer.addEventListener ('click', gallaryClick)

function gallaryClick (evt) {
    evt.preventDefault ()
    if(!evt.target.classList.contains (`gallery__image`)) {
        return;
    }
    const url = evt.target.dataset.source

    const instance = basicLightbox.create(`
    <img src="${url}" width="800" height="600">
`, {
    onShow: () => {document.addEventListener ('keydown', closeBtn)},
    onClose: () => {document.removeEventListener ('keydown', closeBtn)}
})
    instance.show()

    function closeBtn (evt) {
        if(evt.code === 'Escape') {
            instance.close ()
        }
    }
}