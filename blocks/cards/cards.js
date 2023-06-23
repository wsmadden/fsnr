import { createOptimizedPicture } from '../../scripts/lib-franklin.js';


export default function decorate(block) {


  const h1 = block.querySelector('div.tutorial h1');
  console.log("H1", h1);

  console.log("Block Decorate", block);

  [...block.children].forEach((div) => {

    div.className = "card";

    [...div.children].forEach((div) => {

      if (div.children.length === 1 && div.querySelector('picture')) {
        div.className = 'card-image cmp-teaser-hero-image-background-1'
      } 
      else {
        div.className = 'card-body'
      }

    });

  });

}
