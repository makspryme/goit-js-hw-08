import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';

const listGalleryEl = document.querySelector('.gallery');

listGalleryEl.insertAdjacentHTML(
  'beforeend',
  createMakringListOfImages(galleryItems)
);

createMakringListOfImages(galleryItems);

function createMakringListOfImages(elements) {
  const markingImages = elements
    .map(({ preview, original, description }) => {
      const marking = `
        <li class="gallery__item">
          <a self class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" attr="${description}"/>
          </a>
        </li>
        `;

      return marking;
    })
    .join('');

  return markingImages;
}

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
