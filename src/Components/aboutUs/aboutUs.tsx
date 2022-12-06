import React from 'react'
import onView from '../onView/onView'

const AboutUs = () => {

    const aboutUsCardsContainer = document.getElementById('aboutUsCardsContainer')
    if (aboutUsCardsContainer) {
        onView(aboutUsCardsContainer, 'displayHidden', 'displayVisible', "0px", .1)
    }
}

export default AboutUs();