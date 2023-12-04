import { galleryItems } from './gallery-items.js';
// Change code below this line


const jsContainer = document.querySelector('.gallery');

const imgPush = createGalerymarcup(galleryItems);
jsContainer.insertAdjacentHTML('beforeend', imgPush)



function createGalerymarcup(items) {
    return items
        .map(({ original, preview, description }) => 
         `
<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`
    ).join("")
}

jsContainer.addEventListener('click', (event) => {
     event.preventDefault()
    
    if (event.target === event.currentTarget) {
        return;
    }
    
    console.log(event.target.src)
    const instance = basicLightbox.create(`
    <div class="modal">
    <img src="${event.target.src}" width="800" height="600">
    </div>
`)
    instance.show();
    jsContainer.addEventListener('keydown', (evt) => {
        if (evt.code === 'Escape') {
            instance.close();
        }
    })

});



    

    