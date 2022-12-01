import React, { useState } from 'react'

const onView = (ref, className, elements, rootMargin = "0px", threshold = .5) => {
        // State and setter for storing whether element is visible
        let onScreen 
        let delay = 0;
            const classElements = document.querySelectorAll(`.${elements}`)
        const observer = new IntersectionObserver(
          ([entry]) => {
            // Update our state when observer callback fires
             if(entry.isIntersecting){
                classElements!.forEach((element:any) => {
                    element!.classList.remove(className)
                    element!.style.transitionDelay = `${delay}ms`
                    delay += 100
                })
            }

          },
          {
            rootMargin,
            threshold
          }
          );
          if (ref) {
            observer.observe(ref);
          }
       
}

export default onView;