import React from 'react'
import { useState, useEffect, useRef } from "react";
import ReactDOM from 'react-dom/client'
import onView from '../onView/onView';





const WhyUs = () => {
  const reasonsContainer = document.getElementById('reasonsContainer');
  const whyUsContainer = document.getElementById('whyUsContainer')
  const indexPage = document.getElementById('indexPage')
  const onScreen = useOnScreen(whyUsContainer);
  
  onView(reasonsContainer, 'whyHidden', 'whyVisible', "0px", .3)
    
    function useOnScreen(ref, rootMargin = "0px") {
      // State and setter for storing whether element is visible
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          // Update our state when observer callback fires
          if(entry.isIntersecting){

            reasonsContainer!.childNodes.forEach((child: any, i: number) => {
              if (i % 2 == 0) {
                document.getElementById(`reasonInfo${i + 1}`)!.style.width = "100%";
                document.getElementById(`reasonTitle${i + 1}`)!.style.transform = 'translateX(0%)';
              }
              else if (i % 2 != 0) {
                document.getElementById(`reasonInfo${i + 1}`)!.style.width = "100%";
                document.getElementById(`reasonTitle${i + 1}`)!.style.transform = 'translateX(0%)';
              }
            })
          }
        },
        {
          rootMargin,
          threshold:.5
        }
        );
        if (ref) {
          observer.observe(ref);
        }
        return () => {
          observer.unobserve(ref);
        };
    }
    
      

}

export default WhyUs();