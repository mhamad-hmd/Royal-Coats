const c=()=>{document.getElementById("titleHeader").getBoundingClientRect();const t=document.getElementById("swordSvg"),l=document.getElementById("swordSvgPlace").getBoundingClientRect(),s=document.getElementById("shopNow").getBoundingClientRect();console.log(s),(o=>{t.style.top=`${o.top}px`,t.style.right=`${o.right}px`,t.style.bottom=`${o.bottom}px`,t.style.left=`${o.left}px`})(l)};c();window.addEventListener("DOMContentLoaded",()=>{});const e=document.querySelector(".featureCardContainer");let n=!1,d,a;e.addEventListener("mousedown",t=>{n=!0,e.classList.add("active"),d=t.pageX-e.offsetLeft,a=e.scrollLeft});e.addEventListener("mouseleave",()=>{n=!1,e.classList.remove("active")});e.addEventListener("mouseup",()=>{n=!1,e.classList.remove("active")});e.addEventListener("mousemove",t=>{if(!n)return;t.preventDefault();const s=(t.pageX-e.offsetLeft-d)*3;e.scrollLeft=a-s});
//# sourceMappingURL=index.js.map
