import React, { useContext } from 'react'
import { Count } from './UseContext'

const ButtonDisplay = () => {
    const {_, setMulti} = useContext(Count);
    const {count, setCount} = useContext(Count);


    const handleDouble =() =>{
        if(count>=10){
            setCount(c=> c-10);
            setMulti(multi => multi*2);
        }
    }

    const handlePlus5 =() =>{
        if(count>=100){
            setCount(c => c-100);
            setMulti(multi => multi+5)
        }
    }

    const handlePlus10 = () =>{
        if(count>=500){
            setCount(c => c-500);
            setMulti(multi => multi+10)
        }
    }
    return (
        <div className='buttonDisplay'>
            <div className='double'>
                <h3>Double Stuffed 👯‍♀️</h3>
                <p>2x per click</p>
                <button onClick={handleDouble}>10 samosas</button>
            </div>

            <div className='plus5'>
                <h3>Party Pack 🎉</h3>
                <p>+5 per click</p>
                <button onClick={handlePlus5}>100 samosas</button>
            </div>

            <div className='plus10'>
                <h3>Full Feast 👩🏽‍🍳</h3>
                <p>+10 per click</p>
                <button onClick={handlePlus10}>500 samosas</button>
            </div>
        </div>
    )
}

export default ButtonDisplay
