import React from 'react'

const displayCollection = () => {
    const displayCollectionProductCard = document.querySelectorAll('.displayCollectionProductCard')
    displayCollectionProductCard.forEach((element:any, i) => {
        const display = document.querySelectorAll(`.display${i}`)

        element!.addEventListener('mouseenter', () => {
        let delay = 0;

            display.forEach((displayElement:any, i) => {
                displayElement!.classList.remove('optionInvisible')
                displayElement!.style.transitionDelay = `${delay}ms`
                delay +=50
            })
        })
    
        element!.addEventListener('mouseleave', () => {
            display.forEach((displayElement:any) => {
                displayElement.classList.add('optionInvisible')
            })
        })
    })

    

}

export default displayCollection()