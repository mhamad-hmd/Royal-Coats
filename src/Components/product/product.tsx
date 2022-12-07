import { parse } from 'node:path/win32';
import { stringify } from 'querystring';
import React from 'react'
import onView from '../onView/onView';

const Product = () => {
    const productPageContainer = document.getElementById('productPageContainer');

    if (productPageContainer) {
        const productCardContainer = document.querySelectorAll('.productCardContainer ')
        const optionColorInput = document.querySelectorAll('.colorInput')
        const optionSizeInput = document.querySelectorAll('.sizeInput')
        const selectOptions = document.querySelectorAll('.selectOptions ')
        const quantityInput = document.getElementById('quantityInput') as HTMLInputElement;
        const incrementBtn = document.getElementById('increment');
        const decrementBtn = document.getElementById('decrement');
        const rightProductBtn = document.getElementById('rightProductBtn');
        const leftProductBtn = document.getElementById('leftProductBtn');
        const similarProductsCardWrapper = document.getElementById('similarProductsCardWrapper');
        const selectVariant = document.getElementById('selectVariant');


        const currentNumber = document.getElementById('currentNumber');
        const offNumber = document.getElementById('offNumber');
        const selectedColor = localStorage.getItem('colorInputValue')
        let productsNumber
        if (window.screen.width > 1025) {
            productsNumber = Math.ceil(productCardContainer.length / 4) * 100 -100
        }
        else if (window.screen.width > 768) {
            productsNumber = Math.ceil(productCardContainer.length / 3) * 100 -100
        }
        else if (window.screen.width > 640) {
            productsNumber = Math.ceil(productCardContainer.length / 2) * 100 -100
        }
        else if (window.screen.width > 340) {
            productsNumber = Math.ceil(productCardContainer.length) * 100 -100
        }
        console.log(productsNumber, Math.ceil(productCardContainer.length / 4))

        offNumber!.innerHTML = `${productsNumber / 100 + 1}`

        onView(productPageContainer, 'displayHidden', 'displayVisible', "0px", .1)

        let scroll = 0;

        const variant = {
            color: "",
            size: ""
        }
        let variantChosen = JSON.stringify(variant.size) + " / " + JSON.stringify(variant.color)

        optionColorInput.forEach((input: any) => {
            if (input.checked) {
                variant.color = input.value
            }
            input.addEventListener('click', () => {
                variant.color = input.value
                variantChosen = JSON.stringify(variant.size) + " / " + JSON.stringify(variant.color)
            })

            input.addEventListener('change', () => {
                selectOptions.forEach((option: any) => {
                    if (option.id == variantChosen.replaceAll('"', '')) {
                        option.selected = 'selected'
                    }
                })
            });

        })
        optionSizeInput.forEach((input: any) => {
            if (input.checked) {
                variant.size = input.value
            }

            input.addEventListener('click', () => {
                variant.size = input.value
                variantChosen = JSON.stringify(variant.size) + " / " + JSON.stringify(variant.color)
            })

            input.addEventListener('change', () => {
                selectOptions.forEach((option: any) => {
                    if (option.id == variantChosen.replaceAll('"', '')) {
                        option.selected = 'selected'
                    }
                })
            });
        })


        if (quantityInput) {
            let inputValue = Number(quantityInput!.value)
            console.log("availeble")
            incrementBtn!.onclick = (e) => {
                console.log("cli1ck")
                inputValue++
                quantityInput!.value = inputValue.toString()
            }

            decrementBtn!.onclick = (e) => {
                console.log("cli1ck")
                inputValue > 1 && inputValue--
                quantityInput!.value = inputValue.toString()
            }
        }

        optionColorInput.forEach((colorInput: any) => {
            if (colorInput.value === selectedColor) {
                colorInput.checked = true;
            }
        })

        console.log(productsNumber)

        leftProductBtn!.onclick = () => {
            if (scroll < 0) {
                scroll += 100;
                similarProductsCardWrapper!.style.transform = `translateX(${scroll}%)`
                currentNumber!.innerHTML = `${Math.abs(scroll / 100) + 1}`

            }
        }

        rightProductBtn!.onclick = () => {
            if (scroll > productsNumber * -1) {
                scroll -= 100;
                similarProductsCardWrapper!.style.transform = `translateX(${scroll}%)`
                currentNumber!.innerHTML = `${Math.abs(scroll / 100) + 1}`
                console.log(scroll)
            }
        }


    }
}

export default Product();





