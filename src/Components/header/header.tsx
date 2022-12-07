import React, { useState } from 'react'
import onView from '../onView/onView';

const Header = () => {
    const headerContainer = document.getElementById('headerContainer');
    const footerContainer = document.getElementById('footerContainer');
    const headerWrapper = document.getElementById('headerWrapper');
    const announcement = document.getElementById('announcement')
    const swordPath = document.getElementById('swordPath');
    const searchIcon = document.getElementById('searchIcon');
    const searchBarWrapper = document.getElementById('searchBarWrapper');
    const searchBarContainer = document.getElementById('searchBarContainer');
    const itemListHeaderLinks = document.querySelectorAll('.itemListHeader')
    const headerTrans = document.querySelectorAll('.headerTrans')
    const cartProductsNumber = document.getElementById('cartProductsNumber')    

    let delay = 100;

    
    if(cartProductsNumber!.textContent == '0'){
        cartProductsNumber!.classList.add('cartProductsNumberHidden')
    }else{
        cartProductsNumber!.classList.remove('cartProductsNumberHidden')
    }
    
    
    window.addEventListener('DOMContentLoaded', () => {
        headerTrans!.forEach((element:any) => {
            element!.classList.add('headerVisible')
            element!.style.transitionDelay = `${delay}ms`
            delay += 75
        })
        
    })

    let showHeader = 0;

     const linksColor = (top:Boolean) => {
            if(top){
                itemListHeaderLinks!.forEach((link) => {
                    link!.classList.remove('itemListHeaderDown')                
                })
            }
            else{
                itemListHeaderLinks!.forEach((link) => {
                        link!.classList.add('itemListHeaderDown')                
                })
            }
            
        }

        
        
        
        let lastScrollTop = 0

        window!.onscroll = () => {
        if (window.scrollY == 0) {
            announcement!.classList.remove('annUp');
            headerContainer!.classList.remove('headUp')
            swordPath!.style.fill = "rgb(w)"
            searchBarWrapper!.classList.add('searchTop');
            cartProductsNumber!.classList.remove('cartProductsNumberY')
            linksColor(true)
            
        }
        else {
            announcement!.classList.add('annUp')
            headerContainer!.classList.add('headUp')
            swordPath!.style.fill = "rgb(102, 104, 106)"
            searchBarWrapper!.classList.remove('searchTop');
            cartProductsNumber!.classList.add('cartProductsNumberY')
            linksColor(false)
            
        }

       
        const st = window.pageYOffset
        if (st > lastScrollTop) {
            headerContainer!.classList.add('navUp')
        } else if (st < lastScrollTop) {
            headerContainer!.classList.remove('navUp')
        }
        lastScrollTop = st <= 0 ? 0 : st
    }

    const hideNode = (element, parentElement, status) => {
        if (status === "show") {
            element!.classList.remove('collapseNode')
            element!.classList.add('showNode')
            parentElement!.style.visibility = "visible"
        }
        else if (status === "hide") {
            element!.classList.add('collapseNode')
            element!.classList.remove('showNode')
            parentElement!.style.visibility = "collapse"
        }
    }

    searchIcon!.onclick = () => {
        showHeader++

        if (showHeader % 2 !== 0) {
            hideNode(searchBarWrapper, searchBarContainer, "show")
        }
        else if (showHeader % 2 == 0) {
            hideNode(searchBarWrapper, searchBarContainer, "hide")
        }
    }

    const handleClickOutsideSearchBar = (e: any) => {
        if (!searchBarWrapper!.contains(e.target) && !searchIcon!.contains(e.target)) {
            hideNode(searchBarWrapper, searchBarContainer, "hide")
            showHeader = 0
        }
    }
    document.addEventListener('click', (e) => handleClickOutsideSearchBar(e))



    // -----------------Footer--------------------------
    onView(footerContainer, 'displayHiddenFooter', 'displayVisibleFooter', "0px", .3)
    // -----------------Footer--------------------------


}

export default Header();