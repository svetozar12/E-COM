import React, { useState } from "react";
import { BsCart3 } from 'react-icons/bs'
import { BiSearchAlt } from 'react-icons/bi'
import { ExternalLink } from 'react-external-link'

export default function Navbar() {

    const [inputValue, setInputValue] = useState('')


    return (
        <div className="flex px-16 justify-between items-center w-screen h-16 bg-orange-200">
            <div className="relative flex rounded-md items-center justify-center h-3/5 w-48  bg-white" >
                <input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Search..."
                    className="text-md outline-none w-5/6 h-5/6" type="text" />
                {inputValue ? '' : <span><BiSearchAlt /></span>}
            </div>
            <div className="text-2xl">
                LOGO
            </div>
            <div className="text-lg flex  justify-between w-60 flex-shrink flex-nowrap">
                <button>Register</button>
                <button
                >    <ExternalLink href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                        Log in
                    </ExternalLink>
                </button>

                <button className="text-2xl w-10 relative">
                    <BsCart3 />
                    <div className="bottom-4 right-1 text-center flex justify-center absolute w-5 h-5  rounded-full bg-red-600">
                        {/* CART TOTAL */}
                        <span className="text-center text-sm font-semibold">0</span>
                    </div>
                </button>

            </div>
        </div>);
}
