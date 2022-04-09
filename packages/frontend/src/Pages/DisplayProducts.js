import React, { useState, useEffect } from "react";
import data from '../Data/MOCK_DATA'

export default function DisplayProducts() {

    const [items, setItems] = useState(data)
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(7)

    const indexOfLastPost = currentPage * itemsPerPage
    const indexOfFirstPost = indexOfLastPost - itemsPerPage
    const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost)

    const pageNumbers = []

    // Change Page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
        pageNumbers.push(i)
    }

    return <div className=" w-full flex justify-between  flex-col items-center gap-11 min-h-screen   bg-yellow-200">
        <div className="w-10/12 h-screen min-h-screen justify-center  grid grid-cols-5 grid-rows-2 items-center">
            {currentPosts.map((item) => {
                return (
                    <div key={item.id} className='w-44 h-44 mb-4 bg-blue-500 bottom-2 border-white'>
                        <h2>{item.name}</h2>
                    </div>
                )
            })}
        </div>
        <ul className="flex w-full justify-center gap-4 items-center my-5">
            {pageNumbers.map((item) => {
                return <li key={item} className={`w-8 h-8 rounded-full text-center ${currentPage === item ? 'bg-black text-white' : 'bg-white'}`}>
                    <a href="!#" onClick={() => paginate(item)} className='w-full h-full' >
                        {item}
                    </a>
                </li>
            })}
        </ul>
    </div>;
}
