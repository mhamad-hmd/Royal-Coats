import React, { useState } from 'react'

const Header = () => {
    const headerContainer = document.getElementById('headerContainer');
    const announcement = document.getElementById('announcement')

        window!.onscroll = () => {
           if (window.scrollY == 0){
            headerContainer!.style.position = "absolute"
            headerContainer!.style.background = "rgba(180, 177, 177, 0)"
            announcement!.style.display = "flex"
           }
           else{
            announcement!.style.display = "none"
            headerContainer!.style.position = "fixed"
            headerContainer!.style.background = "rgba(180, 177, 177, 100)"
        }
        }
    

}

export default Header();