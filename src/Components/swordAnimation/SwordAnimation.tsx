import React from 'react'
import ReactDOM from 'react-dom/client'



const SwordAnimation = () => {

    const swordSvg = document.getElementById('swordSvg')!;
    const swordPath = document.getElementById('swordPath');
    const bdyPage = document.getElementById('main');
    const onBlurElements = document.querySelectorAll(".onBlur")
    const swordHome = false;
    

    let home = false
    let swordDegree;
    let reset = true;




window!.addEventListener("mousemove", (e) => {

    const swordSpan = document.getElementById('swordSpan')!;

      let mouseX = swordSpan.getBoundingClientRect().right;
      let mouseY = swordSpan.getBoundingClientRect().top;
      console.log(mouseY)
      let radianDegrees = Math.atan2(e.pageX - mouseX, e.pageY - mouseY);
      let rotationDegrees = radianDegrees * (180 / Math.PI) * -1 + 180;
      swordDegree = rotationDegrees;
          swordSvg.style.transform = `rotate(${rotationDegrees + 1080}deg)`;
    });

}

export default SwordAnimation();