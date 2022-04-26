import React from "react";
import { AiOutlineMail } from 'react-icons/ai'

export default function Newsletter() {
    return <div className=" flex justify-center items-center flex-col gap-5 w-full   h-80 bg-orange-200">
        <div className=" flex justify-center items-center flex-col gap-2">
            <h2 className="text-7xl">Newsletter</h2>
            <p className="text-lg opacity-80">Get updates from your favorite products</p>
        </div>
        <div className="flex justify-center items-center w-2/5 h-12 bg-white rounded-xl ">
            <input
                className="h-4/5 w-4/5 px-2 text-lg outline-none"
                type="text"
                placeholder="Your email"
            />
            <div
                className="flex  justify-center items-center text-4xl text-blue-800 bg-white border-l-2 border-black h-4/5 w-1/6">
                <AiOutlineMail className="hover:mb-2 ease-in-out duration-200 cursor-pointer" />
            </div>
        </div>
    </div>;
}
