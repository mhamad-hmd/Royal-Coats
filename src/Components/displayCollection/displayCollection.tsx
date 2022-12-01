import React from 'react'
import onView from '../onView/onView'

const displayCollection = () => {
    const displayCollectionProductCard = document.querySelectorAll('.displayCollectionProductCard')
    const displayCollectionWrapper = document.getElementById('displayCollectionWrapper')    
    let colorInputValue = ""


    onView(displayCollectionWrapper, 'displayHidden', 'displayVisible', "0px", .3)
    
    displayCollectionProductCard.forEach((element:any, i) => {
        const display = document.querySelectorAll(`.display${i}`)
        const colorInput = document.querySelectorAll(`.colorInput${i}`) 
        
        colorInput!.forEach((input:any ) => {
            input.addEventListener('click', () => {
                colorInputValue = input.value
                console.log(colorInputValue)
                window.localStorage.setItem("colorInputValue", colorInputValue)
            })
        })


        element!.addEventListener('mouseenter', () => {
        let delay = 0;

            display.forEach((displayElement:any, i) => {
                displayElement!.classList.remove('optionInvisible')
                displayElement!.style.transitionDelay = `${delay}ms`
                delay +=50
            })
        })
    
        element!.addEventListener('mouseleave', () => {
            let delay = 0;
            display.forEach((displayElement:any) => {
                displayElement.classList.add('optionInvisible')
                displayElement!.style.transitionDelay = `${delay}ms`
            })
        })
    })

    



}

export default displayCollection()