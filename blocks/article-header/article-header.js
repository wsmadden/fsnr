import {getMetadata} from '../../scripts/scripts.js';

export default async function decorate(block) {

    const styles = ['article-pretitle', 'article-info', 'article-location'];
    styles.forEach((style, i) => {
        if (block.children[i]) block.children[i].classList.add(style);
    });

    // Adds the background to the main container
    const background = document.querySelector("main .article-header-container");
    background.classList.add('cmp-section-background-hero-7');

    const article = document.querySelector("main .default-content-wrapper");

    article.innerHTML = articleTemplate(article);
 
    console.log(article);

    console.log(articleTemplate(article));

}

function articleTemplate(el) {

    const title = document.title;
    const publicationDate = getMetadata('author');
    const articleBody = el.innerHTML;

    return `
    <article itemscope="" itemtype="http://schema.org/BlogPosting">
        <header>
        <h1 itemprop="headline">${title}</h1>
        <ul>
            <li>
                <time itemprop="dateCreated pubdate datePublished"> ${publicationDate}</time>
            </li>
        </ul>
        </header> 
        <div class="article-body" itemprop="articleBody">${articleBody}</div>     
    </article>
    `
}

/*
<article itemscope="" itemtype="http://schema.org/BlogPosting">
  <header>
    <h1 itemprop="headline">Firestone Liberia and Children’s Surgery International Put Smiles on the Faces of Liberia’s Children</h1>
    <ul>
      <li>
        <time itemprop="dateCreated pubdate datePublished"> Fri January 20, 2023 </time>
      </li>
    </ul>
  </header> 
  <div class="article__pre-body"></div>
  <div class="article__body" itemprop="articleBody"></div>     
</article>
*/


