import React from 'react'

const Product = () => {
 
const quantityInput = document.getElementById('quantityInput') as HTMLInputElement;
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
let inputValue =  Number(quantityInput!.value)

console.log(quantityInput!.value)

incrementBtn!.onclick = (e) => {
 inputValue++
    quantityInput!.value = inputValue
}

decrementBtn!.onclick = (e) => {
    inputValue > 1 && inputValue--
    quantityInput!.value = inputValue
}   



}

export default Product();





