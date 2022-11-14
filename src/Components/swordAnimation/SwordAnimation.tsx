import React from 'react'
import ReactDOM from 'react-dom/client'


// const App = () => {

//     ReactDOM.createRoot(document.getElementById('op') as HTMLElement).render(
//         <React.StrictMode>
//             <SwordAnimation/>
//         </React.StrictMode>
//     )
// }


const SwordAnimation = () => {

    const swordSvg = document.getElementById('swordSvg')!;
    const swordSpan = document.getElementById('swordSpan')!;
    const swordSvgPlace = document.getElementById('swordSvgPlace')!.getBoundingClientRect();
    const swordPath = document.getElementById('swordPath');
    const bdyPage = document.getElementById('main')
    const onBlurElements = document.querySelectorAll(".onBlur")
    
    console.log(swordSvgPlace)

    let home = false
    let swordDegree;
    let reset = true;

const animate = (target:any) => {
    swordPath!.style.fill = "rgb(180, 177, 177)"
    swordSpan.style.top = `38.5625px`;
    swordSpan.style.left = `${target.left}px`;
    swordSpan.style.width = `14px`;

    if(reset){
        
        onBlurElements.forEach((item:any) => {
            item.style.filter = "blur(0px)"
        })
    }
    else{
    swordSpan.style.rotate = `${swordDegree + 8640}deg`;

    }

    home = true
    reset=false;
    setTimeout(()=>{bdyPage!.style.position = "static"},300) 
    

}

    setTimeout(()=>{animate(swordSvgPlace)},1000) 



bdyPage!.addEventListener("mousemove", (e) => {

      let mouseX = swordSpan.getBoundingClientRect().right;
      let mouseY = swordSpan.getBoundingClientRect().top;
      let radianDegrees = Math.atan2(e.pageX - mouseX, e.pageY - mouseY);
      let rotationDegrees = radianDegrees * (180 / Math.PI) * -1 + 180;
      swordDegree = rotationDegrees;
      if(home){
          swordSvg.style.transform = `rotate(${rotationDegrees + 7200}deg)`;
      }
    });

}

export default SwordAnimation();