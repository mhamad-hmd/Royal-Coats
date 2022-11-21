import React, { useState } from 'react'

const Header = () => {
    const headerContainer = document.getElementById('headerContainer');
    const headerWrapper = document.getElementById('headerWrapper');
    const announcement = document.getElementById('announcement')
    const swordPath = document.getElementById('swordPath');
    const searchIcon = document.getElementById('searchIcon');
    const searchBarWrapper = document.getElementById('searchBarWrapper');
    const searchBarContainer = document.getElementById('searchBarContainer');

    let showHeader = 0;
    let lastScrollTop = 0

    window!.onscroll = () => {
        if (window.scrollY == 0) {
            headerContainer!.classList.remove('annUp');
            swordPath!.style.fill = "rgb(180, 177, 177)"
            searchBarWrapper!.style.background = "rgba(246, 243, 240, 0)"

        }
        else {
            headerContainer!.classList.add('annUp')
            swordPath!.style.fill = "rgb(102, 104, 106)"
            searchBarWrapper!.style.background = "rgba(246, 243, 240, 100)"

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