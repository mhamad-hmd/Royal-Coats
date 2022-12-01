const v=(i,m,o,n="0px",t=.5)=>{let a=0;const l=document.querySelectorAll(`.${o}`),u=new IntersectionObserver(([s])=>{s.isIntersecting&&l.forEach(r=>{r.classList.remove(m),r.style.transitionDelay=`${a}ms`,a+=100})},{rootMargin:n,threshold:t});i&&u.observe(i)},I=()=>{const i=document.querySelectorAll(".displayCollectionProductCard"),m=document.getElementById("displayCollectionWrapper");let o="";v(m,"displayHidden","displayVisible","0px",.3),i.forEach((n,t)=>{const a=document.querySelectorAll(`.display${t}`);document.querySelectorAll(`.colorInput${t}`).forEach(u=>{u.addEventListener("click",()=>{o=u.value,console.log(o),window.localStorage.setItem("colorInputValue",o)})}),n.addEventListener("mouseenter",()=>{let u=0;a.forEach((s,r)=>{s.classList.remove("optionInvisible"),s.style.transitionDelay=`${u}ms`,u+=50})}),n.addEventListener("mouseleave",()=>{let u=0;a.forEach(s=>{s.classList.add("optionInvisible"),s.style.transitionDelay=`${u}ms`})})})};I();const h=()=>{const i=document.getElementById("cardBtnRight"),m=document.getElementById("cardBtnLeft"),o=document.getElementById("featureContainer"),n=document.getElementById("featureCardContainer");document.getElementById("featureCardwrapper"),document.getElementById("cardImg");let t=0,a=33.3,l=1;const u=v(o,"featureHidden","featureVisible");if(console.log(u),screen.width<768&&(t=-55,a=70),n){i.onclick=()=>{l+1<n.childNodes.length&&(l++,t=t-a,n.style.transform=`translateX(${t}%)`,s())},m.onclick=()=>{l>0&&(l--,t=t+a,n.style.transform=`translateX(${t}%)`,s())};const s=()=>{n.childNodes.forEach((r,f)=>{const y=document.getElementById(`cardImg${f+1}`);f===l?(r.style.transform="scale(100%)",y.style.transform="scale(110%)",r.style.filter="blur(0px)",r.classList.add("cardMain"),r.style.boxShadow="0px 0px 0px #ffffff96, 0 0 0px #ffffff96"):(r.style.transform="scale(85%)",r.style.filter="blur(3px)",r.style.boxShadow="rgba(201, 199, 199, 0.603) .5px .5px 40px, rgba(201, 199, 199, 0.603) 0.5px 0.5px 40px",y.style.transform="scale(100%)")})};s()}};h();const E=()=>{const i=document.getElementById("headerContainer");document.getElementById("headerWrapper");const m=document.getElementById("announcement"),o=document.getElementById("swordPath"),n=document.getElementById("searchIcon"),t=document.getElementById("searchBarWrapper"),a=document.getElementById("searchBarContainer"),l=document.querySelectorAll(".itemListHeader"),u=document.querySelectorAll(".headerTrans");let s=100;window.addEventListener("DOMContentLoaded",()=>{u.forEach(e=>{e.classList.add("headerVisible"),e.style.transitionDelay=`${s}ms`,s+=75})});let r=0;const f=e=>{e?l.forEach(d=>{d.classList.remove("itemListHeaderDown")}):l.forEach(d=>{d.classList.add("itemListHeaderDown")})};let y=0;window.onscroll=()=>{window.scrollY==0?(m.classList.remove("annUp"),i.classList.remove("headUp"),o.style.fill="rgb(w)",t.classList.add("searchTop"),f(!0)):(m.classList.add("annUp"),i.classList.add("headUp"),o.style.fill="rgb(102, 104, 106)",t.classList.remove("searchTop"),f(!1));const e=window.pageYOffset;e>y?i.classList.add("navUp"):e<y&&i.classList.remove("navUp"),y=e<=0?0:e};const c=(e,d,g)=>{g==="show"?(e.classList.remove("collapseNode"),e.classList.add("showNode"),d.style.visibility="visible"):g==="hide"&&(e.classList.add("collapseNode"),e.classList.remove("showNode"),d.style.visibility="collapse")};n.onclick=()=>{r++,r%2!==0?c(t,a,"show"):r%2==0&&c(t,a,"hide")};const p=e=>{!t.contains(e.target)&&!n.contains(e.target)&&(c(t,a,"hide"),r=0)};document.addEventListener("click",e=>p(e))};E();const B=()=>{const i=document.getElementById("navBtn"),m=document.getElementById("sideNavLinks2"),o=document.getElementById("dropDownBtn"),n=document.getElementById("itemListParentContainer2"),t=document.getElementById("mobileSideNavWrapper"),a=document.querySelectorAll(".navSubItem"),l=document.querySelectorAll(".sideNavMainElement"),u=document.getElementById("sideNavClose"),s=document.getElementById("blocker"),r=document.body;let f=50,y=a.length*50,c=1;const p=e=>{a.forEach(d=>{e?(d.classList.add("navSubItemin"),d.style.transitionDelay=`${f}ms`,f+=50):e||(d.classList.remove("navSubItemin"),d.style.transitionDelay=`${y}ms`,y-=50)}),f=50,y=a.length*50};t.onclick=e=>{n.contains(e.target)||(c=1,n.classList.remove("navSubMenuContainerIN"),o.classList.remove("dropDownBtnUp"),p(!1))},i.onclick=()=>{s.style.display="block",t.classList.add("mobileSideNavWrapperIn"),r.style.overflow="hidden",l.forEach(e=>{f+=80,e.classList.add("sideNavMainElementOpacity"),e.style.transitionDelay=`${f}ms`}),f=50},u.onclick=()=>{t.classList.remove("mobileSideNavWrapperIn"),document.body.style.overflow="auto",s.style.display="none",l.forEach(e=>{e.classList.remove("sideNavMainElementOpacity")}),p(!1),n.classList.remove("navSubMenuContainerIN"),o.classList.remove("dropDownBtnUp"),c=1},s.onclick=()=>{t.classList.remove("mobileSideNavWrapperIn"),document.body.style.overflow="auto",s.style.display="none",l.forEach(e=>{e.classList.remove("sideNavMainElementOpacity")}),p(!1),n.classList.remove("navSubMenuContainerIN"),o.classList.remove("dropDownBtnUp"),c=1},m.onclick=()=>{c++,c%2===0?(o.classList.add("dropDownBtnUp"),n.classList.add("navSubMenuContainerIN"),p(!0)):(n.classList.remove("navSubMenuContainerIN"),o.classList.remove("dropDownBtnUp"),p(!1))}};B();const L=()=>{if(document.getElementById("productPageContainer")){const m=document.querySelectorAll(".colorInput"),o=document.querySelectorAll(".sizeInput"),n=document.querySelectorAll(".selectOptions "),t=document.getElementById("quantityInput"),a=document.getElementById("increment"),l=document.getElementById("decrement"),u=document.getElementById("rightProductBtn"),s=document.getElementById("leftProductBtn"),r=document.getElementById("similarProductsCardWrapper");document.getElementById("selectVariant");const f=localStorage.getItem("colorInputValue");let y=0;const c={color:"",size:""};let p=JSON.stringify(c.size)+" / "+JSON.stringify(c.color);if(m.forEach(e=>{e.checked&&(c.color=e.value),e.addEventListener("click",()=>{c.color=e.value,p=JSON.stringify(c.size)+" / "+JSON.stringify(c.color)}),e.addEventListener("change",()=>{n.forEach(d=>{d.id==p.replaceAll('"',"")&&(d.selected="selected")})})}),o.forEach(e=>{e.checked&&(c.size=e.value),e.addEventListener("click",()=>{c.size=e.value,p=JSON.stringify(c.size)+" / "+JSON.stringify(c.color)}),e.addEventListener("change",()=>{n.forEach(d=>{d.id==p.replaceAll('"',"")&&(d.selected="selected")})})}),t){let e=Number(t.value);a.onclick=d=>{e++,t.value=e},l.onclick=d=>{e>1&&e--,t.value=e}}m.forEach(e=>{e.value===f&&(e.checked=!0)}),s.onclick=()=>{y<0&&(y+=100,r.style.transform=`translateX(${y}%)`)},u.onclick=()=>{y>-300&&(y-=100,r.style.transform=`translateX(${y}%)`)}}};L();const w=()=>{const i=document.getElementById("swordSvg");window.addEventListener("mousemove",m=>{const o=document.getElementById("swordSpan");let n=o.getBoundingClientRect().right,t=o.getBoundingClientRect().top,l=Math.atan2(m.clientX-n,m.clientY-t)*(180/Math.PI)*-1+180;i.style.transform=`rotate(${l+1080}deg)`})};w();const b=()=>{const i=document.getElementById("reasonsContainer"),m=document.getElementById("whyUsContainer");document.getElementById("indexPage"),o(m),v(i,"whyHidden","whyVisible","0px",.3);function o(n,t="0px"){const a=new IntersectionObserver(([l])=>{l.isIntersecting&&i.childNodes.forEach((u,s)=>{s%2==0?(document.getElementById(`reasonInfo${s+1}`).style.width="100%",document.getElementById(`reasonTitle${s+1}`).style.transform="translateX(0%)"):s%2!=0&&(document.getElementById(`reasonInfo${s+1}`).style.width="100%",document.getElementById(`reasonTitle${s+1}`).style.transform="translateX(0%)")})},{rootMargin:t,threshold:.5});return n&&a.observe(n),()=>{a.unobserve(n)}}};b();window.addEventListener("DOMContentLoaded",()=>{});
//# sourceMappingURL=index.js.map
