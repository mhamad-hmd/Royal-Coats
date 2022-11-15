import React from 'react'

const Feature = () => {
  const righBtn = document.getElementById('cardBtnRight');
  const leftBtn = document.getElementById('cardBtnLeft');
  const featureCardContainer = document.getElementById('featureCardContainer');
  const featureCardwrapper = document.getElementById('featureCardwrapper');
  const cardImg = document.getElementById('cardImg');
  let translateCount = -45;
  let translateBy = 70;
  let mainChild = 1;


  righBtn!.onclick = () => {
    if ((mainChild + 1) < featureCardContainer!.childNodes.length) {
      mainChild++
      translateCount = translateCount - translateBy;
      featureCardContainer!.style.transform = `translateX(${translateCount}%)`;
      mainComponent()
      console.log(mainChild)
    }
  }


  leftBtn!.onclick = () => {
    if (mainChild > 0) {
      mainChild--
      translateCount = translateCount + translateBy;
      featureCardContainer!.style.transform = `translateX(${translateCount}%)`;
      mainComponent()
      console.log(mainChild)
    }

  }

  

  const mainComponent = () => {
    featureCardContainer!.childNodes.forEach((child: any, i) => {
      const childImg = document.getElementById(`cardImg${i + 1}`);
      console.log(childImg)
      if (i === mainChild) {
        child.style.transform = 'scale(100%)'
        childImg!.style.transform = 'scale(110%)'
        child.style.filter = 'blur(0px)'
        child.classList.add("cardMain")
        child.style.boxShadow = '0px 0px 0px #ffffff96, 0 0 0px #ffffff96'
        
      }
      
      else if(i > mainChild) {
        child.style.transform = 'scale(85%)'
        child.style.filter = 'blur(3px)'
        child.style.boxShadow = 'rgba(201, 199, 199, 0.603) .5px .5px 40px, rgba(201, 199, 199, 0.603) 0.5px 0.5px 40px'
        childImg!.style.transform = 'scale(100%)'

      }
      else{
        child.style.boxShadow = 'rgba(201, 199, 199, 0.603) .5px .5px 40px, rgba(201, 199, 199, 0.603) 0.5px 0.5px 40px'
        child.style.transform = 'scale(120%)'
        child.style.filter = 'blur(3px)'
        childImg!.style.transform = 'scale(100%)'


      }

      // featureCardContainer!.ontransitionstart = () => {
      //   featureCardwrapper!.style.scale = '90%'
      //   featureCardwrapper!.style.filter = 'blur(1px)'
      // }

      // featureCardContainer!.ontransitionend = () => {
      //   featureCardwrapper!.style.filter = 'blur(0px)'

      //   featureCardwrapper!.style.scale = '100%'
      // }


    })



  }

  mainComponent()
}

export default Feature()