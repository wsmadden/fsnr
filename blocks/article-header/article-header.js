import { getMetadata } from '../../scripts/scripts.js';

export default async function decorate(block) {

    const styles = ['article-pretitle', 'article-info', 'article-location'];
    styles.forEach((style, i) => {
        if (block.children[i]) block.children[i].classList.add(style);
    });

    // Adds the background to the main container
    const background = document.querySelector("main .article-header-container");
    background.classList.add('cmp-section-background-hero-7');

    // Decorates article body
    const article = document.querySelector("main .default-content-wrapper");
    article.innerHTML = articleTemplate(article);

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
