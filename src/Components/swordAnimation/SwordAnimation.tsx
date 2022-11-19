import React from 'react'
import ReactDOM from 'react-dom/client'



const SwordAnimation = () => {

    const swordSvg = document.getElementById('swordSvg')!;

    window!.addEventListener("mousemove", (e) => {

        const swordSpan = document.getElementById('swordSpan')!;

        let mouseX = swordSpan.getBoundingClientRect().right;
        let mouseY = swordSpan.getBoundingClientRect().top;
        let radianDegrees = Math.atan2(e.clientX - mouseX, e.clientY - mouseY);
        let rotationDegrees = radianDegrees * (180 / Math.PI) * -1 + 180;
        swordSvg.style.transform = `rotate(${rotationDegrees + 1080}deg)`;
    });

}

export default SwordAnimation();