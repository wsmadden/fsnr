import { readBlockConfig, decorateIcons } from '../../scripts/lib-franklin.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  const cfg = readBlockConfig(block);
  block.textContent = '';

  // fetch footer content
  const footerPath = cfg.footer || '/footer';
  const resp = await fetch(`${footerPath}.plain.html`, window.location.pathname.endsWith('/footer') ? { cache: 'reload' } : {});

  if (resp.ok) {
    const html = await resp.text();

    // decorate footer DOM
    //const footer = document.createElement('div');
    //footer.innerHTML = html;

    block.innerHTML = html;

console.log(html)

console.log(block)

const classes = ['brand', 'copy'];
let f = block.firstElementChild;
while (f && classes.length) {
  f.classList.add(classes.shift());
  f = f.nextElementSibling;
}

    //decorateIcons(footer);
    //block.append(footer);
  }
}
