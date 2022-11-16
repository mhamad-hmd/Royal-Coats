import React from 'react'
import { useState, useEffect, useRef } from "react";
import ReactDOM from 'react-dom/client'



const whyUs = () => {

    ReactDOM.createRoot(document.getElementById('WhyUsTitle') as HTMLElement).render(
        <React.StrictMode>
            <WhyUsReact/>
        </React.StrictMode>
    )
}

const WhyUsReact = () => {
    const reasonImg = document.getElementById('reasonImg');
    const reasonInfo = document.getElementById('reasonInfo');
    const ref = useRef<HTMLHeadingElement>(null);
    const onScreen = useOnScreen(ref, "-50px");
    console.log(onScreen)
    
    function useOnScreen(ref, rootMargin = "0px") {
        // State and setter for storing whether element is visible
        const [isIntersecting, setIntersecting] = useState(false);
        useEffect(() => {
          const observer = new IntersectionObserver(
            ([entry]) => {
              // Update our state when observer callback fires
              setIntersecting(entry.isIntersecting);
            },
            {
              rootMargin,
            }
          );
          if (ref.current) {
            observer.observe(ref.current);
          }
          return () => {
            observer.unobserve(ref.current);
          };
        }, []); // Empty array ensures that effect is only run on mount and unmount
        return isIntersecting;
      }

      useEffect(() => {
          if(onScreen){
            reasonInfo!.style.width = "100%"
            reasonImg!.style.left = "0%"
          }
      },[onScreen])




  return (
    <h1 className='whyUsTitle' ref={ref}>WHY US</h1>
  )
}

export default whyUs();