import React, { useState, useEffect, useRef } from "react";
import { images } from "../Data/data";
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'
const Carousel = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        let timeout = setTimeout(() => {
            setCount(count + 1)
            if (count === images.length - 1) {
                setCount(0)
            }
        }, 3000);
        return () => clearTimeout(timeout)
    }, [count])

    return (
        <>
            <div style={{ backgroundImage: `url(${images[count]})`, width: '100vw', height: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', transitionDuration: '0.4s', transitionTimingFunction: 'ease-in-out' }}>
            </div>





        </>)

}



export default Carousel;