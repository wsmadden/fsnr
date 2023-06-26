import { createOptimizedPicture } from '../../scripts/lib-franklin.js';

export default function decorate(block) {

  const h1 = block.querySelector('div.tutorial h1');

  [...block.children].forEach((div) => {

    div.className = "cmp-teaser";

    [...div.children].forEach((div) => {

      if (div.children.length === 1 && div.querySelector('picture')) {
        div.className = 'cmp-teaser__image'


        let imageWrapper = document.createElement("div");
        imageWrapper.classList.add("cmp-image");
        imageWrapper.append(div.querySelector('picture'));
        div.append(imageWrapper);

      } 
      else {
        div.className = 'cmp-teaser__content'
      }

    });

  });

}
