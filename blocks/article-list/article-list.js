import { createOptimizedPicture } from '../../scripts/lib-franklin.js';

export default async function decorate(block) {
  
    let articles;
    const items = block.querySelector('ul');

    if (!items) {
        block.innerHTML = "";
        return;
    }

    if (items) {
        const res = await fetch('/articles/query-index.json?limit=20');
        const queryData = await res.json();
        articles = queryData?.data;
    
        const data = (await Promise.all([...items.children].map(async (li) => {

            const path = li.innerHTML;

            for (let i = 0; i < articles.length; i += 1) {
                if (articles[i].path === path) {
                    return articles[i];
                }
            }
            
            // Return null if no index is found
            return null;

        }))).filter((item) => item); // filter out null values returned from the for loop

        block.innerHTML = decorateArticleCards(data);

    }

}

function decorateArticleCards(data) {

    const articleWrapper = document.createElement('div');

    data.forEach((article, index) => {

        const card = document.createElement('article');
        card.classList.add('article-card');

        let picture = createOptimizedPicture (
            article.image,
            article?.imageAlt,
            false,
            [{ width: 300 }],
          );

        const template = `
            <div class="article-card__image">
                 ${picture.innerHTML}
            </div>
            <div class="article-card__copy">
                <div class="article-card__publicationDate">${article.publicationDate}</div>
                <h3 class="article-card__headline">
                    <a href="${article.path}">${article.title}</a>
                </h3>
            </div>`;

        card.innerHTML = template;

        articleWrapper.append(card);      
        
    });

    return articleWrapper.innerHTML;

}