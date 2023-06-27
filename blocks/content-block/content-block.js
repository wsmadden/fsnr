import { createOptimizedPicture } from '../../scripts/lib-franklin.js';

export default function decorate(block) {

  [...block.children].forEach((div) => {

    div.className = "cmp-teaser";

    [...div.children].forEach((div) => {

      const pictureEl = div.querySelector('picture');

      if (div.children.length === 1 && pictureEl) {
        div.className = 'cmp-teaser__image'
        pictureEl.querySelector("img").classList.add("cmp-image__image");
        
        let imageWrapper = document.createElement("div");
        imageWrapper.classList.add("cmp-image");
        imageWrapper.append(pictureEl);
        div.append(imageWrapper);

      } 
      else {
        div.className = 'cmp-teaser__content'
      }

    });

  });

}
