import React from "react";

import { BiSearchAlt } from 'react-icons/bi'

export default function ProductPage() {
    return (
        <div className="flex flex-col font-body justify-center gap-10 items-center w-4/5 h-5/6 bg-white rounded-md mr-12">
            <div className="w-full h-12 px-10 flex justify-between">
                <h1 className="text-3xl"> LOGO</h1>
                <div className="flex  w-2/5 justify-between text-center  rounded-md">
                    <input
                        placeholder="Search..."
                        className="px-4 outline-none h-full bg-gray-200 w-5/6 flex justify-center items-center rounded-l-md" type="text" />
                    <div className="w-1/6 h-full bg-blue-700  text-white flex text-center justify-center rounded-r-md text-4xl"><BiSearchAlt /></div>
                </div>
                <div>
                    <p>skr</p>
                </div>
            </div>

            <div className="w-5/6 h-3/4 border-2 border-black">
                <h2>Products</h2>
            </div>
        </div>
    )
}