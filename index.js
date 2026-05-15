import{a as w,S,i as n}from"./assets/vendor-73qhTu8_.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))m(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&m(d)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function m(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();const v="https://pixabay.com/api/",q="55831399-c8952df427389e36f7129bddd";async function f(o,r){return(await w.get(v,{params:{key:q,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}})).data}const h=document.querySelector(".gallery"),P=new S(".gallery a",{captionsData:"alt",captionDelay:250}),g=document.querySelector(".loader");function R(){h.innerHTML=""}function p(){g.classList.remove("is-hidden")}function i(){g.classList.add("is-hidden")}const y=document.querySelector(".load-more-btn");function b(){y.classList.remove("is-hidden")}function a(){y.classList.add("is-hidden")}function L(o){const r=o.map(e=>`
        <li class="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}">
            <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}"/>
        </a>


        <div class="info">
        <p class="info-item">
        <b>Likes</b>
        ${e.likes}
        </p>

        <p class="info-item">
        <b>Views</b>
        ${e.views}
        </p>

        <p class="info-item">
        <b>Comments</b>
        ${e.comments}
        </p>

        <p class="info-item">
        <b>Downloads</b>
        ${e.downloads}
        </p>
        </div>
        </li>
        `).join("");h.insertAdjacentHTML("beforeend",r),P.refresh()}const B=document.querySelector(".form"),M=document.querySelector(".load-more-btn");let c=1,u="",l=0;B.addEventListener("submit",$);M.addEventListener("click",I);async function $(o){o.preventDefault();const r=o.target.elements["search-text"].value.trim();if(r!==""){u=r,c=1,R(),a(),p();try{const e=await f(u,c);if(i(),e.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(e.hits),l=e.hits.length,l>=e.totalHits?(a(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):b()}catch{i(),n.error({message:"Something went wrong. Please try again!",position:"topRight"})}}}async function I(){c+=1,p(),a();try{const o=await f(u,c);i(),L(o.hits);const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"}),l+=o.hits.length,l>=o.totalHits?(a(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):b()}catch{i(),n.error({message:"Something went wrong. Please try again!",position:"topRight"})}}
//# sourceMappingURL=index.js.map
