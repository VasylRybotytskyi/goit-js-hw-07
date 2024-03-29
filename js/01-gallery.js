import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const itemsContainer = createGalleryItem(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', itemsContainer);
galleryContainer.addEventListener('click', onImgClick);


function createGalleryItem (items) {
   return items.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
      })
      .join('');
  }

const instance = basicLightbox.create(
    `
  <img width="1280" height="auto" src="">`,
    {
      onShow: (instance) => {
        window.addEventListener('keydown', onEscKeyPress);
      },
      onClose: (instance) => {
        window.removeEventListener('keydown', onEscKeyPress);
      },
    }
  );
  
  function onImgClick(e) {
    e.preventDefault();
    const datasetSource = e.target.dataset.source;
    if (!datasetSource) return;
    instance.element().querySelector('img').src = datasetSource;
    instance.show();
  }
  
  function onEscKeyPress(e) {
    if (e.code !== 'Escape') return;
    instance.close();
  }


