import{a as d,S as f,i as a}from"./assets/vendor-DFA_L3eI.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const m="https://pixabay.com/api/",p="55831399-c8952df427389e36f7129bddd";function h(s){return d.get(m,{params:{key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}const l=document.querySelector(".gallery"),y=new f(".gallery a",{captionsData:"alt",captionDelay:250}),u=document.querySelector(".loader");function g(){l.innerHTML=""}function b(){u.classList.remove("is-hidden")}function c(){u.classList.add("is-hidden")}function L(s){const o=s.map(t=>`
        <li class="gallery-item">
        <a class="gallery-link" href="${t.largeImageURL}">
            <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}"/>
        </a>


        <div class="info">
        <p class="info-item">
        <b>Likes</b>
        ${t.likes}
        </p>

        <p class="info-item">
        <b>Views</b>
        ${t.views}
        </p>

        <p class="info-item">
        <b>Comments</b>
        ${t.comments}
        </p>

        <p class="info-item">
        <b>Downloads</b>
        ${t.downloads}
        </p>
        </div>
        </li>
        `).join("");l.insertAdjacentHTML("beforeend",o),y.refresh()}const S=document.querySelector(".form");S.addEventListener("submit",w);function w(s){s.preventDefault();const o=s.target.elements["search-text"].value.trim();o!==""&&(g(),b(),h(o).then(t=>{if(c(),t.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(t.hits)}).catch(t=>{c(),a.error({message:"Something went wrong. Please try again!",position:"topRight"})}))}
//# sourceMappingURL=index.js.map
