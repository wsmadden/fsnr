import { createOptimizedPicture } from '../../scripts/lib-franklin.js';

export default function decorate(block) {

  [...block.children].forEach((div) => {

    console.log(div);

    div.className = "card";

    [...div.children].forEach((div) => {
      console.log("length", div.children.length);
      if (div.children.length === 1 && div.querySelector('picture')) div.className = 'card-image';
      else div.className = 'card-body';
    });


  });

}
