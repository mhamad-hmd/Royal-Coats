import React from 'react'
import onView from '../onView/onView';

const contact = () => {
const contactInput = document.querySelectorAll('.contactInput')
const contactLabel = document.querySelectorAll('.contactLabel')
const contactContainer = document.getElementById('contactContainer');

onView(contactContainer, 'displayHidden', 'displayVisible', "0px", .1)


contactInput!.forEach((input:any , inputIndex) => {
    input.addEventListener("change", () => {
        if(input.value != ''){
            contactLabel[inputIndex].classList.add('contactLabelValid')
        }else{
            contactLabel[inputIndex].classList.remove('contactLabelValid')
        }
    })
})




}

export default contact();