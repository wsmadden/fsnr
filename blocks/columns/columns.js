export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  // setup image columns
  [...block.children].forEach((row) => {

    row.className = "card teaser";
     
    [...row.children].forEach((col) => {
      console.log("col", col);

      col.className = "cmp-teaser";

      [...col.children].forEach((el) => {

        const pictureEl = el.querySelector('picture');
  
        if (el.children.length === 1 && pictureEl) {
          el.className = 'cmp-teaser__image'
          pictureEl.querySelector("img").classList.add("cmp-image__image");
          
          let imageWrapper = document.createElement("div");
          imageWrapper.classList.add("cmp-image");
          imageWrapper.append(pictureEl);
          el.append(imageWrapper);
  
        } 
        else {
          el.className = 'cmp-teaser__content'
        }
  
      });

    });
  });
}
