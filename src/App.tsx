import React, { useEffect } from 'react'
import { useState } from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {

    ReactDOM.createRoot(document.getElementById('op') as HTMLElement).render(
        <React.StrictMode>
            <Test/>
        </React.StrictMode>
    )
}


const Test = () => {
    useEffect(() => {

        console.log('REACT WORKS')
    })
    return(
        <div className=''>
        </div>
    )
} 


 export default App();