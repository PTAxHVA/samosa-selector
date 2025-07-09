import React, { useState } from 'react'
import { Count } from './UseContext'
import samosa from './assets/samosa.png'
import ButtonDisplay from './ButtonDisplay.jsx'

const Display = () => {
    const [count, setCount] = useState(0);
    const [multi, setMulti] = useState(1);

    const handleClick =() =>{
        setCount(c => c + multi);
    }



    return (
        <div className='display'>
            <h2>Count: {count}</h2> 
            <img src={samosa} alt="" onClick={handleClick} />
            <Count.Provider value={{count, setCount, multi, setMulti}}>
                <ButtonDisplay></ButtonDisplay>
            </Count.Provider>
        
        </div>
    )
}

export default Display
