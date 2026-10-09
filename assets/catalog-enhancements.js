(() => {
"use strict";
const slug=s=>String(s||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
const nav=document.querySelector(".nav-links");
if(nav&&!nav.querySelector(".collection-menu")){
 const wrap=document.createElement("div");wrap.className="collection-menu";
 wrap.innerHTML='<button class="collection-menu-toggle" type="button" aria-expanded="false">Shop collections <span>⌄</span></button><div class="collection-menu-panel"><a href="collections.html">All collections</a><a href="collections.html?category=divine-sculptures">Divine Sculptures</a><a href="collections.html?category=home-decor">Home Decor</a><a href="collections.html?category=miniatures-collectibles">Miniatures & Collectibles</a><a href="collections.html?category=functional-utility">Functional & Utility</a><a href="collections.html?category=gifts-personalised">Gifts & Personalised</a></div>';
 nav.append(wrap);
 const btn=wrap.querySelector("button");btn.addEventListener("click",()=>{const open=wrap.classList.toggle("open");btn.setAttribute("aria-expanded",String(open));});
 document.addEventListener("click",e=>{if(!wrap.contains(e.target)){wrap.classList.remove("open");btn.setAttribute("aria-expanded","false");}});
}
document.addEventListener("click",e=>{
 const card=e.target.closest(".product-card");
 if(card&&!e.target.closest("button")&&!e.target.closest("a")){
 const title=card.querySelector("h3");if(title)location.href="product.html?id="+encodeURIComponent(slug(title.textContent));
 }
 const link=e.target.closest(".collection-card a");
 if(link&&link.getAttribute("href")&&link.getAttribute("href").includes("#cat-")){
 const id=link.getAttribute("href").split("#cat-")[1];link.href="collections.html?category="+encodeURIComponent(id);
 }
});
function filterRequestedCategory(){
 const category=new URLSearchParams(location.search).get("category");if(!category)return;
 const sections=[...document.querySelectorAll(".cat-section")];if(!sections.length)return;
 sections.forEach(s=>s.style.display=s.dataset.cat===category?"":"none");
 const chips=[...document.querySelectorAll(".chip")];chips.forEach(c=>c.classList.toggle("active",c.dataset.filter===category));
 const title=sections.find(s=>s.dataset.cat===category);if(title){const banner=document.querySelector(".page-banner h1");if(banner)banner.textContent=title.querySelector("h2")?.textContent||"Collection";}
}
const observer=new MutationObserver(filterRequestedCategory);observer.observe(document.body,{childList:true,subtree:true});filterRequestedCategory();
})();