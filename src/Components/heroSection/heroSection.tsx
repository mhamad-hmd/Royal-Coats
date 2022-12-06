import React from 'react'

const HeroSection = () => {
    const displayCollectionContainer = document.getElementById('displayCollectionContainer')
    if(displayCollectionContainer){

        const shopNow = document.getElementById('shopNow')
    
        shopNow!.addEventListener('click', () => {
            displayCollectionContainer!.scrollIntoView({ behavior: 'smooth', block: 'start'});
        })
    }

}

export default HeroSection();