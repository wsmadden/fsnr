import { createOptimizedPicture } from '../../scripts/lib-franklin.js';

export default function decorate(block) {

  [...block.children].forEach((div) => {
  
    console.log(div);

    div.className = "card";

    [...div.children].forEach((div) => {
      console.log("length",div.children.length);
      if (div.children.length === 1 && div.querySelector('picture')) div.className = 'card-image';
      else div.className = 'card-body';
    });


  });

//console.log(block);

/*
   const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    li.innerHTML = row.innerHTML;

     const wrapper = document.createElement('div');
    wrapper.classList.add('card');

    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) div.className = 'card-image';
      else div.className = 'card-body';
    });

    wrapper.innerHTML = li.innerHTML;
    li.innerHTML = wrapper.outerHTML;

    ul.append(li);

  });
  ul.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.textContent = '';
  block.append(ul);
  */
}
