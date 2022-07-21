(()=>{"use strict";const n=async n=>{const a=n?`/${n}`:"";try{const n=await fetch(`https://rickandmortyapi.com/api/character${a}?status=dead`);return await n.json()}catch(n){console.error(n)}},a=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/",e=()=>'\n    <div class="Error404">\n        <h2>Error 404</h2>\n    </div>\n    ',t={"/":async()=>`\n    <div class="Characters">\n        ${(await n()).results.map((n=>`\n        <article class="Characters-item">\n            <a href="#/${n.id}/">\n                <img src="${n.image}" alt="${n.name}">\n                <h2>${n.name}</h2>\n            </a>\n        </article>\n        `)).join("")}\n        <button>See more</button>\n    </div>`,"/:id":async()=>{const e=a(),t=await n(e);return`\n    <div class="Characters-inner">\n        <article class="Character-card">\n            <img src="${t.image}" alt="${t.name}">\n            <h2>${t.name}</h2>\n        </article>\n        <article class="Character-card">\n            <h3>Episodes: <span>${t.episode.length}</span></h3>\n            <h3>Species:<span>${t.species}</span></h3>\n            <h3>Gender:<span>${t.gender}</span></h3>\n            <h3>Origin:<span>${t.origin.name}</span></h3>\n            <h3>Last Location: <span>${t.location.name}</span></h3>\n        </article>\n    </div>\n    `},"/contact":"Contact"},s=async()=>{const n=document.querySelector("#header"),s=document.querySelector("#content");n.innerHTML=await'\n    <div class="header-main">\n        <div class="header-logo">\n            <h1>\n                <a href="/">\n                    Rick & Morty | Cementary\n                </a>\n            </h1>\n        </div>\n        <div class="header-nav">\n            <a href="#/about/">About</a>\n        </div>\n    </div>';let r=a(),i=await(n=>n.length<=3?"/"===n?n:"/:id":`/${n}`)(r),c=t[i]?t[i]:e;s.innerHTML=await c()};window.addEventListener("load",s),window.addEventListener("hashchange",s)})();