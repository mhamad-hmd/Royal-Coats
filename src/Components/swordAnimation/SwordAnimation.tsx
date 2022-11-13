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

    const titleHeader = document.getElementById('titleHeader')!.getBoundingClientRect()
    const swordSpan = document.getElementById('swordSvg')!;
    const swordSvgPlace = document.getElementById('swordSvgPlace')!.getBoundingClientRect();
    const shopNow = document.getElementById('shopNow')!.getBoundingClientRect();
    const learnMore = document.getElementById('learnMore')!.getBoundingClientRect();
    const cart = document.getElementById('cart')!.getBoundingClientRect();

    console.log("btn:",learnMore, " sword:",swordSvgPlace)
    
const animate = (target:any) => {
    swordSpan.style.top = `${target.top}px`;
    swordSpan.style.right = `${target.right}px`;
    swordSpan.style.bottom = `${target.bottom}px`;
    swordSpan.style.left = `${target.left}px`;
}

    animate(swordSvgPlace)
   
    function getAngle (x1, y1, x2, y2) {
        var distY = Math.abs(y2-y1); //opposite
        var distX = Math.abs(x2-x1); //adjacent
        var dist = Math.sqrt((distY*distY)+(distX*distX)); //hypotenuse, 
           //don't know if there is a built in JS function to do the square of a number
        var val = distY/dist;
        var aSine = Math.asin(val);
        return aSine*(180/Math.PI); //return angle in degrees
    }

    const rotateTo = getAngle(swordSvgPlace.x, swordSvgPlace.y, cart.x, cart.y )


console.log(getAngle(screenX, screenY, cart.x, cart.y ))
swordSpan.style.rotate =  `${rotateTo}deg`

}

export default SwordAnimation()