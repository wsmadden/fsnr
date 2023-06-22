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

  //block.innerHTML = template;

}

/*
<div class="cards block" data-block-name="cards" data-block-status="loaded">
  <div class="card">
    <div class="card-body">
      <p><em>WHO ARE WE?</em></p>
      <h1 id="firestone-natural-rubber"><a href="https://www.firestonenaturalrubber.com/about-us/" title="Firestone Natural Rubber">Firestone Natural Rubber</a></h1>
      <p>Firestone Natural Rubber has been a trusted partner of the people and country of Liberia for more than 90 years. The company makes unparalleled contributions to the economic and social development of the country, leading Liberia’s private sector in employment, education, and healthcare opportunities for thousands of its citizens.</p>
      <p class="button-container"><a href="https://www.firestonenaturalrubber.com/about-us/" title="Learn More About Us" class="button primary">Learn More About Us</a></p>
    </div>
    <div class="card-image">
      <picture>
        <source type="image/webp" srcset="./media_178860adb7c4ecd6994161b776312ddaecf3212ff.png?width=2000&amp;format=webply&amp;optimize=medium" media="(min-width: 600px)">
        <source type="image/webp" srcset="./media_178860adb7c4ecd6994161b776312ddaecf3212ff.png?width=750&amp;format=webply&amp;optimize=medium">
        <source type="image/png" srcset="./media_178860adb7c4ecd6994161b776312ddaecf3212ff.png?width=2000&amp;format=png&amp;optimize=medium" media="(min-width: 600px)">
        <img loading="eager" alt="Investing in the Liberian Community" src="./media_178860adb7c4ecd6994161b776312ddaecf3212ff.png?width=750&amp;format=png&amp;optimize=medium" width="541" height="666">
      </picture>
    </div>
  </div>
</div>
        */

const template = `
<div class="cmp-section__wrapper" id="section-725f560c17">
  <div class="hero teaser cmp-teaser--hero-main cmp-teaser--hero-image-right cmp-teaser-hero-image-background-1">
    <div id="hero-ba0d8e39da" class="cmp-teaser">
      <div class="cmp-teaser__image">
        <div data-cmp-is="image" data-cmp-lazythreshold="0" data-cmp-src="/index/_jcr_content/root/responsivegrid/section_1070585908/section-parsys/hero/.coreimg{.width}.png/1656621266579/rubber-trees-2-hero.png" data-asset="/content/dam/fsnr/heros/rubber-trees-2-hero.png" id="image-ba0d8e39da" class="cmp-image" itemscope="" itemtype="http://schema.org/ImageObject">
          <img src="/content/dam/fsnr/heros/rubber-trees-2-hero.png" class="cmp-image__image" itemprop="contentUrl" data-cmp-hook-image="image">
        </div>
      </div>
      <div class="cmp-teaser__content">
        <div class="cmp-teaser__pretitle">WHO ARE WE?</div>
        <h1 class="cmp-teaser__title">
          <a class="cmp-teaser__title-link" href="/about-us/">Firestone Natural Rubber</a>
        </h1>
        <div class="cmp-teaser__description">
          <p>Firestone Natural Rubber has been a trusted partner of the people and country of Liberia for more than 90 years. The company makes unparalleled contributions to the economic and social development of the country, leading Liberia’s private sector in employment, education, and healthcare opportunities for thousands of its citizens.</p>
        </div>
        <div class="cmp-teaser__action-container">
          <a class="cmp-teaser__action-link" href="/about-us/" id="hero-ba0d8e39da-cta-cc49b8769c">Learn More About Us</a>
        </div>
      </div>
    </div>
  </div>
</div>
`;
