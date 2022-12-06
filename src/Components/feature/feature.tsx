import React from 'react'
import onView from '../onView/onView';

const Feature = () => {

  const leftBtn = document.getElementById('cardBtnLeft');
  const featureContainer = document.getElementById('featureContainer');
  const featureCardContainer = document.getElementById('featureCardContainer');
  const cardBtnsSvgRight = document.getElementById('cardBtnsSvgRight');
  const cardBtnsSvgLeft = document.getElementById('cardBtnsSvgLeft');
  
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

    cardBtnsSvgRight!.addEventListener('click', () => {
      if ((mainChild + 1) < featureCardContainer!.childNodes.length) {
        mainChild++
        translateCount = translateCount - translateBy;
        featureCardContainer!.style.transform = `translateX(${translateCount}%)`;
        mainComponent()
        leftBtn!.style.visibility = "visible"
        cardBtnsSvgLeft!.classList.remove('hideBtn')   
      }

      if((mainChild + 1) == featureCardContainer!.childNodes.length){
        cardBtnsSvgRight!.classList.add('hideBtn')   
      }


    }
    )
  
  
    cardBtnsSvgLeft!.addEventListener('click', () => {
      if (mainChild > 0) {
        mainChild--
        translateCount = translateCount + translateBy;
        featureCardContainer!.style.transform = `translateX(${translateCount}%)`;
        mainComponent()
        cardBtnsSvgRight!.classList.remove('hideBtn')   
      }
      if(mainChild == 0){
        cardBtnsSvgLeft!.classList.add('hideBtn')
      }
      else{
        cardBtnsSvgLeft!.classList.remove('hideBtn')
      }
    }
    )
  
    
  
    const mainComponent = () => {
      featureCardContainer!.childNodes.forEach((child: any, i) => {
        if (i === mainChild) {
          child.classList.add("cardMain")
          child.classList.remove("cardSecondary")
        }
        
        else {
          child.classList.remove("cardMain")
          child.classList.add("cardSecondary")
        }

        
        
      })
  
  
  
    }
  
    mainComponent()
  }


}

export default Feature()