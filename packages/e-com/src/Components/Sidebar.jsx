import React, { useState } from "react";
import { GiElectric } from 'react-icons/gi'
import { IoShirtSharp } from 'react-icons/io5'
import { BiJoystick } from 'react-icons/bi'
import { GiToothbrush } from 'react-icons/gi'
import { IoBasketballOutline } from 'react-icons/io5'
import { GiHealthNormal } from 'react-icons/gi'
import { FaBabyCarriage } from 'react-icons/fa'
import { MdPets } from 'react-icons/md'
import { BiWorld } from 'react-icons/bi'

import { AiOutlineRight } from 'react-icons/ai'
import { AiOutlineLeft } from 'react-icons/ai'

import { FiLogOut } from 'react-icons/fi'
import { FiLogIn } from 'react-icons/fi'
export default function Sidebar() {

    const [expand, setExpand] = useState(false)
    return (
        <div className={`absolute flex justify-start  rounded-lg items-left  gap-5 flex-col duration-75 ease-in  h-full bg-white left-0 ${expand ? "w-52" : "w-16"}`}>
            <button onClick={() => setExpand(!expand)} className=" w-16 h-10 flex duration-75 ease-in-out items-end justify-center text-lg">{expand ? <AiOutlineLeft /> : <AiOutlineRight />}</button>
            <div className="w-full h-0.5 bg-black flex justify-center items-center"></div>
            <div className="flex flex-col font-body justify-around text-left ml-4 h-3/4">
                <div className="flex gap-10 text-lg">
                    <span className="text-3xl"><GiElectric /></span>
                    {expand ?
                        <p>Electronics</p>

                        : ''}
                </div>

                <div className="flex gap-10 text-center">

                    <span className="text-3xl"><IoShirtSharp /></span>
                    <p className={`${expand ? 'block' : 'hidden'}`}>Fashion</p>

                </div>

                <div className="flex gap-10">

                    <span className="text-3xl"><BiJoystick /></span>
                    {expand ?
                        <p>Games</p>

                        : ''}
                </div>

                <div className="flex gap-10">

                    <span className="text-3xl"><GiToothbrush /></span>
                    {expand ?
                        <p>Care</p>

                        : ''}
                </div>

                <div className="flex gap-10">

                    <span className="text-3xl"><IoBasketballOutline /></span>
                    {expand ?
                        <p>Sports</p>

                        : ''}
                </div>

                <div className="flex gap-10">

                    <span className="text-3xl"><GiHealthNormal /></span>
                    {expand ?
                        <p>Health</p>

                        : ''}
                </div>

                <div className="flex gap-10">

                    <span className="text-3xl"><FaBabyCarriage /></span>
                    {expand ?
                        <p>Baby</p>

                        : ''}
                </div>

                <div className="flex gap-10">

                    <span className="text-3xl"><MdPets /></span>
                    {expand ?
                        <p>Pet</p>

                        : ''}
                </div>

                <div className="flex gap-10">


                    <span className="text-3xl"><BiWorld /></span>
                    {expand ?
                        <p>Travel</p>

                        : ''}
                </div>


            </div>
            <div className="w-full h-0.5   bg-black flex justify-center items-center"></div>

            <div className="flex flex-col font-body justify-around text-left ml-2">

                <div className="flex gap-10">


                    <span className="text-3xl"><FiLogIn /></span>
                    {expand ?
                        <p>Login</p>

                        : ''}
                </div>
            </div>
        </div>
    )
}