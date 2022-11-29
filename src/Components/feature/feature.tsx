import React from 'react'
import onView from '../onView/onView';

const Feature = () => {

  const righBtn = document.getElementById('cardBtnRight');
  const leftBtn = document.getElementById('cardBtnLeft');
  const featureContainer = document.getElementById('featureContainer');
  const featureCardContainer = document.getElementById('featureCardContainer');
  const featureCardwrapper = document.getElementById('featureCardwrapper');
  const cardImg = document.getElementById('cardImg');
  let translateCount = 0;
  let translateBy = 33.3;
  let mainChild = 1;

  const displayFeature = onView(featureContainer, 'featureHidden', 'featureVisible')

console.log(displayFeature)
if(screen.width < 768 ){
  translateCount = -55;
  translateBy = 70;
}


  if(featureCardContainer){

    righBtn!.onclick = () => {
      if ((mainChild + 1) < featureCardContainer!.childNodes.length) {
        mainChild++
        translateCount = translateCount - translateBy;
        featureCardContainer!.style.transform = `translateX(${translateCount}%)`;
        mainComponent()
      }
    }
  
  
    leftBtn!.onclick = () => {
      if (mainChild > 0) {
        mainChild--
        translateCount = translateCount + translateBy;
        featureCardContainer!.style.transform = `translateX(${translateCount}%)`;
        mainComponent()
      }
  
    }
  
    
  
    const mainComponent = () => {
      featureCardContainer!.childNodes.forEach((child: any, i) => {
        const childImg = document.getElementById(`cardImg${i + 1}`);
        if (i === mainChild) {
          child.style.transform = 'scale(100%)'
          childImg!.style.transform = 'scale(110%)'
          child.style.filter = 'blur(0px)'
          child.classList.add("cardMain")
          child.style.boxShadow = '0px 0px 0px #ffffff96, 0 0 0px #ffffff96'
          
        }
        
        else {
          child.style.transform = 'scale(85%)'
          child.style.filter = 'blur(3px)'
          child.style.boxShadow = 'rgba(201, 199, 199, 0.603) .5px .5px 40px, rgba(201, 199, 199, 0.603) 0.5px 0.5px 40px'
          childImg!.style.transform = 'scale(100%)'
  
        }

        
        
      })
  
  
  
    }
  
    mainComponent()
  }


}

export default Feature()