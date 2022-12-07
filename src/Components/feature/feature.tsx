import React from 'react'
import onView from '../onView/onView';

const Feature = () => {

  const featureContainer = document.getElementById('featureContainer');
  const featureCardContainer = document.getElementById('featureCardContainer');
  


 onView(featureContainer, 'featureHidden', 'featureVisible')


  if(featureCardContainer){
    const cardWrapper = document.querySelectorAll('.cardWrapper')
    const cardBtnsSvgRight = document.getElementById('cardBtnsSvgRight');
    const cardBtnsSvgLeft = document.getElementById('cardBtnsSvgLeft');


    let translateCount = -33.3;
    let translateCountBack = 33.3;
    let translateBy = 33.3;
    let mainChild = 1;


    if(screen.width < 768 ){
      translateCount = -125;
      translateCountBack = 15;
      translateBy = 70;
    }  


    cardBtnsSvgRight!.addEventListener('click', () => {
      if (mainChild + 1 < featureCardContainer!.childNodes.length) {
        featureCardContainer!.style.transform = `translateX(${translateCount}%)`;
        mainChild++
        mainComponent()
        cardBtnsSvgLeft!.classList.remove('hideBtn')   
        translateCount = translateCount - translateBy;
        translateCountBack = translateCountBack - translateBy;
      }

      if(mainChild + 1 == featureCardContainer!.childNodes.length){
        cardBtnsSvgRight!.classList.add('hideBtn')   
      }


    }
    )
  
  
    cardBtnsSvgLeft!.addEventListener('click', () => {
      if (mainChild > 0) {
        featureCardContainer!.style.transform = `translateX(${translateCountBack}%)`;
        mainChild--
        mainComponent()
        cardBtnsSvgRight!.classList.remove('hideBtn')   
        translateCountBack = translateCountBack + translateBy;
        translateCount = translateCount + translateBy ;
      }
      if(mainChild === 0){
        cardBtnsSvgLeft!.classList.add('hideBtn')
      }
      else{
        cardBtnsSvgLeft!.classList.remove('hideBtn')
      }
    }
    )
  
    
  
    const mainComponent = () => {
      cardWrapper!.forEach((child: any, i) => {
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