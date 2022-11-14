import React from 'react'

const Feature = () => {
  const righBtn = document.getElementById('cardBtnRight');
  const leftBtn = document.getElementById('cardBtnLeft');
  const featureCardContainer = document.getElementById('featureCardContainer');
  let translateCount = -17.8;
  let translateBy = 47.2;
  let mainChild = 1;


  righBtn!.onclick = () => {
    if ((mainChild + 1) < featureCardContainer!.childNodes.length) {
      mainChild++
      translateCount = translateCount - translateBy;
      featureCardContainer!.style.transform = `translateX(${translateCount}vw)`;
      mainComponent()
      console.log(mainChild)
    }
  }


  leftBtn!.onclick = () => {
    if (mainChild > 0) {
      mainChild--
      translateCount = translateCount + translateBy;
      featureCardContainer!.style.transform = `translateX(${translateCount}vw)`;
      mainComponent()
      console.log(mainChild)
    }

  }

  const mainComponent = () => {
    featureCardContainer!.childNodes.forEach((child: any, i) => {
      if (i === mainChild) {
        child.style.transform = 'scale(101%)'
        child.style.filter = 'blur(0px)'
        child.classList.add("cardMain")
      }
      else {
        child.style.transform = 'scale(80%)'
        child.style.filter = 'blur(2px)'

      }

    })
  }

  mainComponent()
}

export default Feature()