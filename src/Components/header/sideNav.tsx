import React from 'react'

const SideNav = () => {
  const navBtn = document.getElementById('navBtn');
  const sideNavLinks = document.getElementById('sideNavLinks2');
  const dropDownBtn = document.getElementById('dropDownBtn');
  const  itemListParentContainer = document.getElementById('itemListParentContainer2');
  const  mobileSideNavWrapper = document.getElementById('mobileSideNavWrapper');
  const navSubItem = document.querySelectorAll('.navSubItem');
  const sideNavMainElement = document.querySelectorAll('.sideNavMainElement');
  const sideNavClose = document.getElementById('sideNavClose');
  const blocker = document.getElementById('blocker');
  const body = document.body

  let transDelay = 50 ;
  let reverseDelay = navSubItem!.length * 50;
  
  let subNav = 1
  let navSwitch = 1
 

const subItemSwitch = (itemSwitch: Boolean) => {
  navSubItem!.forEach((element:any) => {
    if(itemSwitch){
      element!.classList.add('navSubItemin')
      element!.style.transitionDelay = `${transDelay}ms`
      transDelay += 50
    }
    else if(!itemSwitch){
      element!.classList.remove('navSubItemin')
      element!.style.transitionDelay = `${reverseDelay}ms`
      reverseDelay -= 50;
    }
  })
  transDelay = 50;
  reverseDelay = navSubItem!.length * 50;

}



mobileSideNavWrapper!.onclick = (e:any) => {
  if(!itemListParentContainer!.contains(e.target)){
    subNav = 1
    itemListParentContainer!.classList.remove('navSubMenuContainerIN');
    dropDownBtn!.classList.remove('dropDownBtnUp');
    subItemSwitch(false)
  }
}

navBtn!.onclick = () => {
  blocker!.style.display = "block"
  mobileSideNavWrapper!.classList.add('mobileSideNavWrapperIn')
  body.style.overflow = "hidden"
  sideNavMainElement!.forEach((element:any) => {
    transDelay += 80
    element!.classList.add('sideNavMainElementOpacity')
    element!.style.transitionDelay = `${transDelay}ms`
  })
  transDelay = 50;
}


sideNavClose!.onclick = () => {
  mobileSideNavWrapper!.classList.remove('mobileSideNavWrapperIn')
  document.body.style.overflow = "auto"
  blocker!.style.display = "none"
  sideNavMainElement!.forEach((element) => {
    element!.classList.remove('sideNavMainElementOpacity')
  })
  subItemSwitch(false)
  itemListParentContainer!.classList.remove('navSubMenuContainerIN');
  dropDownBtn!.classList.remove('dropDownBtnUp');
  subNav = 1
}

blocker!.onclick = () => {
  mobileSideNavWrapper!.classList.remove('mobileSideNavWrapperIn')
  document.body.style.overflow = "auto"
  blocker!.style.display = "none"
  sideNavMainElement!.forEach((element) => {
    element!.classList.remove('sideNavMainElementOpacity')
  })
  subItemSwitch(false)
  itemListParentContainer!.classList.remove('navSubMenuContainerIN');
  dropDownBtn!.classList.remove('dropDownBtnUp');
  subNav = 1
}


sideNavLinks!.onclick = () => {
      subNav++
      if(subNav % 2 === 0){
        dropDownBtn!.classList.add('dropDownBtnUp');
        itemListParentContainer!.classList.add('navSubMenuContainerIN');
        subItemSwitch(true)

      }
      else{
        itemListParentContainer!.classList.remove('navSubMenuContainerIN');
        dropDownBtn!.classList.remove('dropDownBtnUp');
        subItemSwitch(false)
      }


  }






}

export default SideNav();   