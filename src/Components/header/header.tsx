import React, { useState } from 'react'

const Header = () => {
    const headerContainer = document.getElementById('headerContainer');
    const headerWrapper = document.getElementById('headerWrapper');
    const announcement = document.getElementById('announcement')
    const swordPath = document.getElementById('swordPath');
    const searchIcon = document.getElementById('searchIcon');
    const searchBarWrapper = document.getElementById('searchBarWrapper');
    const searchBarContainer = document.getElementById('searchBarContainer');
    const itemListHeaderLinks = document.querySelectorAll('.itemListHeader')

    let showHeader = 0;

     const linksColor = (top:Boolean) => {
            if(top){
                itemListHeaderLinks!.forEach((link) => {
                    link!.classList.remove('itemListHeaderDown')                
                })
            }
            else{
                itemListHeaderLinks!.forEach((link) => {
                    console.log(link)
                    link!.classList.add('itemListHeaderDown')                
                })
            }
            
        }

    
    
    
    let lastScrollTop = 0

    window!.onscroll = () => {
        if (window.scrollY == 0) {
            headerContainer!.classList.remove('annUp');
            swordPath!.style.fill = "rgb(w)"
            searchBarWrapper!.classList.add('searchTop');
            linksColor(true)

        }
        else {
            headerContainer!.classList.add('annUp')
            swordPath!.style.fill = "rgb(102, 104, 106)"
            searchBarWrapper!.classList.remove('searchTop');
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




}

export default Header();