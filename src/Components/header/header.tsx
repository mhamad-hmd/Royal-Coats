import React, { useState } from 'react'

const Header = () => {
    const headerContainer = document.getElementById('headerContainer');
    const announcement = document.getElementById('announcement')
    const swordPath = document.getElementById('swordPath')
    const searchIcon = document.getElementById('searchIcon')
    const searchBarWrapper = document.getElementById('searchBarWrapper')
    const searchBarContainer = document.getElementById('searchBarContainer')
    const itemListHeader = document.getElementById('itemListHeader2')
    const headerSubMenuContainer = document.getElementById('headerSubMenuContainer2')
    const headerSubMenuWrapper = document.getElementById('headerSubMenuWrapper2')
    
    let showHeader = 0;
    let lastScrollTop = 0

    window!.onscroll = () => {
        if (window.scrollY == 0) {
            headerContainer!.style.background = "rgba(180, 177, 177, 0)"
            announcement!.style.display = "flex"
            swordPath!.style.fill = "rgb(180, 177, 177)"
            searchBarWrapper!.style.background = "rgba(180, 177, 177, 0)"

        }
        else {
            announcement!.style.display = "none"
            headerContainer!.style.background = "rgba(180, 177, 177, 100)"
            swordPath!.style.fill = "rgb(102, 104, 106)"
            searchBarWrapper!.style.background = "rgba(180, 177, 177, 100)"

        }

        const st = window.pageYOffset
        if(st > lastScrollTop){

        } else if(st < lastScrollTop){
            console.log("scrolling Up")
        }
        lastScrollTop = st <= 0 ? 0 : st
    }

    const hideNode = (element, parentElement, status) => {
        if(status === "show"){
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
            hideNode(searchBarWrapper, searchBarContainer, "show" )
        }
        else if (showHeader % 2 == 0) {
            hideNode(searchBarWrapper, searchBarContainer, "hide" )
        }
    }

    const handleClickOutsideSearchBar = (e: any) => {
        if (!searchBarWrapper!.contains(e.target) && !searchIcon!.contains(e.target)) {
            hideNode(searchBarWrapper, searchBarContainer, "hide" )
            showHeader = 0
        }
    }
    document.addEventListener('click', (e) => handleClickOutsideSearchBar(e))




}

export default Header();