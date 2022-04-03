import React, { useState } from "react";
import MOCK_DATA from "../Data/MOCK_DATA";
import { BiCart, BiSearch, BiStar } from "react-icons/bi";

export default function () {


    return <div className=" py-40 pl-10 grid-cols-5 items-center gap-6 justify-center inline-grid  grid-rows-4 w-full  min-h-screen bg-slate-200">
        {MOCK_DATA.map((item, index) => {
            const { name, id, image } = item
            const [isHovering, setIsHovering] = useState(false)

            return (
                <div onMouseEnter={() => {
                    setIsHovering(true)


                }} onMouseLeave={() => setIsHovering(false)} key={id} className="relative item hover:opacity-70  w-64  border-black h-80 bg-slate-50">
                    <h2 className="absolute z-50">{name}</h2>
                    {isHovering ?
                        <>
                            <div className="absolute w-full h-full  bg-gray-200">
                                <div className="hovers absolute flex justify-center items-center text-2xl left-6 bottom-28 w-10 h-10 rounded-full bg-gray-300">
                                    <BiCart />
                                </div>

                                <div className="hovers absolute flex justify-center items-center text-2xl left-28 bottom-28 w-10 h-10 rounded-full bg-slate-300">
                                    <BiSearch />
                                </div>

                                <div className="hovers absolute flex justify-center items-center text-2xl left-48 bottom-28 w-10 h-10 rounded-full bg-slate-300">
                                    <BiStar />
                                </div>
                            </div>
                        </>
                        :


                        ''}
                    {/* <img src={image} alt="" /> */}
                </div>
            )
        })}
    </div>;
}
