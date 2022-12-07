import React from 'react'
import onView from '../onView/onView';

const Cart = () => {

    const cartContainer = document.getElementById('cartContainer');
    if (cartContainer) {

        const quantityInput = document.getElementById('quantityInput') as HTMLInputElement;
        const incrementBtn = document.getElementById('increment');
        const decrementBtn = document.getElementById('decrement');
        const cartUpdate = document.getElementById('cartUpdate');

        onView(cartContainer, 'displayHidden', 'displayVisible', "0px", .1)

        if (quantityInput) {
            let inputValue = Number(quantityInput!.value)
            console.log("availeble")
            incrementBtn!.onclick = (e) => {
                console.log("cli1ck")
                inputValue++
                quantityInput!.value = inputValue.toString()
                cartUpdate!.click()
            }

            decrementBtn!.onclick = (e) => {
                console.log("cli1ck")
                inputValue > 1 && inputValue--
                quantityInput!.value = inputValue.toString()
                cartUpdate!.click()
            }
        }

    }
}

export default Cart();