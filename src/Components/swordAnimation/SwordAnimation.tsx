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
    console.log(shopNow)
    
const animate = (target:any) => {
    swordSpan.style.top = `${target.top}px`;
    swordSpan.style.right = `${target.right}px`;
    swordSpan.style.bottom = `${target.bottom}px`;
    swordSpan.style.left = `${target.left}px`;
}

    animate(swordSvgPlace)

    


}

export default SwordAnimation()