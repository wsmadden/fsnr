import { createOptimizedPicture } from '../../scripts/lib-franklin.js';

export default function decorate(block) {

  const h1 = block.querySelector('div.tutorial h1');

  [...block.children].forEach((div) => {

    div.className = "card";

    [...div.children].forEach((div) => {

      if (div.children.length === 1 && div.querySelector('picture')) {
        div.className = 'card-image'


        let imageWrapper = document.createElement("div");
        imageWrapper.classList.add("card-image-wrapper");
        imageWrapper.append(div.querySelector('picture'));
        div.append(imageWrapper);

      } 
      else {
        div.className = 'card-body'
      }

    });

  });

}
