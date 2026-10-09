(() => {
"use strict";
const slug=s=>String(s||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
const nav=document.querySelector(".nav-links");
if(nav&&!nav.querySelector(".collection-menu")){
 const wrap=document.createElement("div");wrap.className="collection-menu";
 wrap.innerHTML='<a class="collection-menu-toggle" href="collections.html">Collections</a><div class="collection-menu-panel"><a href="collections.html">All collections</a><div class="collection-menu-categories" aria-label="Product categories"><span>Loading categories…</span></div></div>';
 nav.append(wrap);
 fetch("products-template.csv",{cache:"no-store"}).then(r=>{if(!r.ok)throw Error();return r.text();}).then(text=>{
  const rows=[];let row=[],cell="",quoted=false;
  for(let i=0;i<text.length;i++){const ch=text[i];if(quoted){if(ch==='"'){if(text[i+1]==='"'){cell+='"';i++;}else quoted=false;}else cell+=ch;}else if(ch==='"')quoted=true;else if(ch===","){row.push(cell);cell="";}else if(ch==="\\n"||ch==="\\r"){if(ch==="\\r"&&text[i+1]==="\\n")i++;row.push(cell);rows.push(row);row=[];cell="";}else cell+=ch;}if(cell||row.length){row.push(cell);rows.push(row);}
  const heads=(rows.shift()||[]).map(x=>x.trim().toLowerCase().replace(/\\s+/g,"_")),ci=heads.indexOf("category"),ai=heads.indexOf("active"),unique=[];
  rows.forEach(r=>{const name=(r[ci]||"").trim();const active=ai<0?"yes":(r[ai]||"yes").trim();if(name&&!/^(no|n|false|0|hidden)$/i.test(active)&&!unique.some(x=>x.name.toLowerCase()===name.toLowerCase()))unique.push({name,id:slug(name)});});
  const holder=wrap.querySelector(".collection-menu-categories");holder.innerHTML=unique.map(c=>'<a href="collections.html?category='+encodeURIComponent(c.id)+'">'+c.name.replace(/[&<>"]/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[ch]))+'</a>').join("")||'<span>No categories yet</span>';
 }).catch(()=>{const holder=wrap.querySelector(".collection-menu-categories");if(holder)holder.innerHTML='<a href="collections.html">Browse all collections</a>';});
}
document.addEventListener("click",e=>{
 const card=e.target.closest(".product-card");
 if(card&&!e.target.closest("button")&&!e.target.closest("a")){
 const title=card.querySelector("h3");if(title)location.href="product.html?id="+encodeURIComponent(slug(title.textContent));
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