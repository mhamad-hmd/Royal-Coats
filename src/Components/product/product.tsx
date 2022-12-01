import React from 'react'
import onView from '../onView/onView';

const Product = () => {
    const productPageContainer = document.getElementById('productPageContainer');
    
    if (productPageContainer) {
        const optionColorInput = document.querySelectorAll('.colorInput')
        const optionSizeInput  = document.querySelectorAll('.sizeInput')
        const selectOptions  = document.querySelectorAll('.selectOptions ')
        const quantityInput = document.getElementById('quantityInput') as HTMLInputElement;
        const incrementBtn = document.getElementById('increment');
        const decrementBtn = document.getElementById('decrement');
        const rightProductBtn = document.getElementById('rightProductBtn');
        const leftProductBtn = document.getElementById('leftProductBtn');
        const similarProductsCardWrapper = document.getElementById('similarProductsCardWrapper');
        const selectVariant = document.getElementById('selectVariant');
        const selectedColor = localStorage.getItem('colorInputValue')

        let scroll = 0;
        const variant = {
            color:"",
            size:""
        }
        let variantChosen = JSON.stringify(variant.size)+ " / " +JSON.stringify(variant.color)

        optionColorInput.forEach((input:any ) => {
            if(input.checked ){
                variant.color = input.value 
            }
            input.addEventListener('click', () => {
                variant.color = input.value 
                variantChosen = JSON.stringify(variant.size)+ " / " +JSON.stringify(variant.color)
            })

            input.addEventListener('change', () => {
                selectOptions.forEach((option:any) => {
                    if(option.id == variantChosen.replaceAll('"','')){
                        option.selected = 'selected'
                    }
                })
            });

        })
        optionSizeInput.forEach((input:any ) => {
            if(input.checked ){
                variant.size = input.value 
            }

            input.addEventListener('click', () => {
                variant.size = input.value
                variantChosen = JSON.stringify(variant.size)+ " / " +JSON.stringify(variant.color)
            })

            input.addEventListener('change', () => {
                selectOptions.forEach((option:any) => {
                    if(option.id == variantChosen.replaceAll('"','')){
                        option.selected = 'selected'
                    }
                })
            });
        })


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

        optionColorInput.forEach((colorInput:any) => {
            if(colorInput.value === selectedColor ){
                colorInput.checked = true;
            }
        })

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





