const u=()=>{const m=document.getElementById("cardBtnRight"),n=document.getElementById("cardBtnLeft"),s=document.getElementById("featureCardContainer");document.getElementById("featureCardwrapper"),document.getElementById("cardImg");let o=-45,d=70,t=1;m.onclick=()=>{t+1<s.childNodes.length&&(t++,o=o-d,s.style.transform=`translateX(${o}%)`,l(),console.log(t))},n.onclick=()=>{t>0&&(t--,o=o+d,s.style.transform=`translateX(${o}%)`,l(),console.log(t))};const l=()=>{s.childNodes.forEach((e,r)=>{const a=document.getElementById(`cardImg${r+1}`);console.log(a),r===t?(e.style.transform="scale(100%)",a.style.transform="scale(110%)",e.style.filter="blur(0px)",e.classList.add("cardMain"),e.style.boxShadow="0px 0px 0px #ffffff96, 0 0 0px #ffffff96"):r>t?(e.style.transform="scale(85%)",e.style.filter="blur(3px)",e.style.boxShadow="rgba(201, 199, 199, 0.603) .5px .5px 40px, rgba(201, 199, 199, 0.603) 0.5px 0.5px 40px",a.style.transform="scale(100%)"):(e.style.boxShadow="rgba(201, 199, 199, 0.603) .5px .5px 40px, rgba(201, 199, 199, 0.603) 0.5px 0.5px 40px",e.style.transform="scale(120%)",e.style.filter="blur(3px)",a.style.transform="scale(100%)")})};l()};u();const y=()=>{const m=document.getElementById("swordSvg"),n=document.getElementById("swordSpan"),s=document.getElementById("swordSvgPlace").getBoundingClientRect(),o=document.getElementById("swordPath"),d=document.getElementById("main"),t=document.querySelectorAll(".onBlur");console.log(s);let l=!1,e,r=!0;const a=c=>{o.style.fill="rgb(180, 177, 177)",n.style.top="38.5625px",n.style.left=`${c.left}px`,n.style.width="14px",r?t.forEach(g=>{g.style.filter="blur(0px)"}):n.style.rotate=`${e+8640}deg`,l=!0,r=!1,setTimeout(()=>{d.style.position="static"},300)};setTimeout(()=>{a(s)},1e3),d.addEventListener("mousemove",c=>{let g=n.getBoundingClientRect().right,i=n.getBoundingClientRect().top,f=Math.atan2(c.pageX-g,c.pageY-i)*(180/Math.PI)*-1+180;e=f,l&&(m.style.transform=`rotate(${f+7200}deg)`)})};y();window.onbeforeunload=function(){window.scrollTo(0,0)};window.addEventListener("DOMContentLoaded",()=>{});
//# sourceMappingURL=index.js.map
