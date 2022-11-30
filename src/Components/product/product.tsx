import React from 'react'
import onView from '../onView/onView';

const Product = () => {
    const productPageContainer = document.getElementById('productPageContainer');
    if (productPageContainer) {
        
        const quantityInput = document.getElementById('quantityInput') as HTMLInputElement;
        const incrementBtn = document.getElementById('increment');
        const decrementBtn = document.getElementById('decrement');
        const rightProductBtn = document.getElementById('rightProductBtn');
        const leftProductBtn = document.getElementById('leftProductBtn');
        const similarProductsCardWrapper = document.getElementById('similarProductsCardWrapper');


        let scroll = 0;


        if (quantityInput) {
            let inputValue = Number(quantityInput!.value)

            incrementBtn!.onclick = (e) => {
                inputValue++
                quantityInput!.value = inputValue
            }

            decrementBtn!.onclick = (e) => {
                inputValue > 1 && inputValue--
                quantityInput!.value = inputValue
            }
        }


        leftProductBtn!.onclick = () => {
            if (scroll < 0) {
                scroll += 100;
                similarProductsCardWrapper!.style.transform = `translateX(${scroll}%)`
            }
        }

        rightProductBtn!.onclick = () => {
            if (scroll > -300) {
                scroll -= 100;
                similarProductsCardWrapper!.style.transform = `translateX(${scroll}%)`
            }
        }


    }
}

export default Product();





