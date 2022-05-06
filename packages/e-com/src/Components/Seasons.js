import React, { useState } from "react";
import MOCK_DATA from "../Data/MOCK_DATA";
import { BiCart, BiSearch, BiStar } from "react-icons/bi";
import { images } from "../Data/data";

function DisplayItems() {

    const coverPhotos = [
        {
            title: 'Winter Collection',
            image: 'https://media.istockphoto.com/photos/smiling-woman-sitting-on-the-floor-picture-id1085747632?k=20&m=1085747632&s=612x612&w=0&h=2x5kcSa9x7rhXgJfF5V8oE2Ir9vXtP2muCxwSgko4zI=',
            category: 'Winter'
        },

        {
            title: 'Winter Collection',
            image: 'https://media.istockphoto.com/photos/young-happy-woman-choosing-clothing-and-looking-herself-in-a-mirror-picture-id1344043089?k=20&m=1344043089&s=612x612&w=0&h=qqe5Gs12vZ7Y7cTuchCgJpofMGWL_ygBGoJIdZZZ8Io=',
            category: 'Fall'
        },

        {
            title: 'Summer Collection',
            image: 'https://media.istockphoto.com/photos/beautiful-lady-overjoyed-by-warm-spring-breeze-dream-of-romantic-date-picture-id1170648040?k=20&m=1170648040&s=612x612&w=0&h=eOMcjFL2qyKnfvkH3IbIYkAKWXtQXCScCE12ahhqX_w=',
            category: 'Summer'
        },

        {
            title: 'Spring Collection',
            image: 'https://media.istockphoto.com/photos/young-adult-girl-standing-near-wardrobe-at-home-picture-id1208331222?k=20&m=1208331222&s=612x612&w=0&h=WTbtlUK_nGen0oA5anAXrkRnODHxQLmg2S4pAjQf6z0=',
            category: 'Spring'
        },



        // {
        //     title: 'Sprin Collection',
        //     image: 'https://media.istockphoto.com/photos/young-adult-girl-standing-near-wardrobe-at-home-picture-id1208331222?k=20&m=1208331222&s=612x612&w=0&h=WTbtlUK_nGen0oA5anAXrkRnODHxQLmg2S4pAjQf6z0=',
        //     category: 'Spring'
        // }
    ]

    return <div className="py-5  grid grid-cols-2 grid-rows-2 lg:grid-cols-2 items-center  h-overScreen w-11/12 ">
        {coverPhotos.map((item, index) => {
            return (
                <div className="cover relative border-2 border-yellow-200 rounded-lg shadow-2xl  drop-shadow-lg shadow-yellow-200 overflow-hidden h-52 md:h-80 w-2/3 ">
                    <img className=" absolute w-full h-full" src={item.image} alt="" />
                    <div className=" flex flex-col justify-between items-center h-48 absolute top-16 left-20 ">
                        <h1 className="text-2xl lg:text-5xl font-bold text-black">{item.title}</h1>
                        <button className="w-28 h-12  text-yellow-50 bg-slate-900 text-xl">Shop Now</button>
                    </div>
                    {/* <div className="item flex flex-col  justify-around items-center">
                        <div className="">
                            <h2 className="text-white text-2xl">{item.title}</h2>

                        </div>

                        <button className="flex  justify-center items-center text-3xl rounded-full  w-10 h-10 bg-white"><BiSearch /></button>
                        <button className="flex justify-center items-center rounded-full text-3xl w-10 h-10 bg-white"><BiCart /></button>
                        <button className=" flex justify-center items-center rounded-full text-3xl w-10 h-10 bg-white"><BiStar /></button>

                    </div> */}
                </div>
            )
        })}


    </div>
}

export default DisplayItems;