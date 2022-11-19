import React, { useState } from 'react'

const Header = () => {
    const headerContainer = document.getElementById('headerContainer');
    const announcement = document.getElementById('announcement')
    const swordPath = document.getElementById('swordPath')
    const searchIcon = document.getElementById('searchIcon')
    const searchBarWrapper = document.getElementById('searchBarWrapper')

    let showHeader = 0;
    

        window!.onscroll = () => {
           if (window.scrollY == 0){
            headerContainer!.style.position = "absolute"
            headerContainer!.style.background = "rgba(180, 177, 177, 0)"
            announcement!.style.display = "flex"
            swordPath!.style.fill = "rgb(180, 177, 177)"
           }
           else{
            announcement!.style.display = "none"
            headerContainer!.style.position = "fixed"
            headerContainer!.style.background = "rgba(180, 177, 177, 100)"
            swordPath!.style.fill = "rgb(102, 104, 106)"

        }
        }

        searchIcon!.onclick = () => {

            if(showHeader % 2 !== 0){

                searchBarWrapper!.classList.add('collapseHeader')
                searchBarWrapper!.classList.remove('show')
            }
            else if(showHeader % 2 === 0){
                searchBarWrapper!.classList.remove('collapseHeader')
                searchBarWrapper!.classList.add('show')
            }
            showHeader++
        }
    

}

export default Header();