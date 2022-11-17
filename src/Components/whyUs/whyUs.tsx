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
    const reasonsContainer = document.getElementById('reasonsContainer');
    const ref = useRef<HTMLHeadingElement>(null);
    const onScreen = useOnScreen(ref, "-300px");
    
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
            reasonsContainer!.childNodes.forEach((child:any, i:number) => {
              if(i % 2 == 0){
                document.getElementById(`reasonInfo${i + 1}`)!.style.width = "100%";
                document.getElementById(`reasonTitle${i + 1}`)!.style.transform = 'translateX(0%)';
              }
              else if(i % 2 != 0){
                document.getElementById(`reasonInfo${i + 1}`)!.style.width = "100%";
                document.getElementById(`reasonTitle${i + 1}`)!.style.transform = 'translateX(0%)';
              }

            })

          }
      },[onScreen])




  return (
    <h1 className='whyUsTitle' ref={ref}>Why Us</h1>
  )
}

export default whyUs();