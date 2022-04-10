import React from "react";

export default function Footer() {
    return <div className="flex items-center w-full h-52 bg-white">
        <div className="flex flex-col  items-center justify-between pt-2  w-1/4 h-full border-2 ">
            <h2 className="text-2xl">Name</h2>
            <p className="px-6 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo amet quis accusantium, rerum molestiae voluptate quidem autem at provident corrupti.</p>
        </div>

        <div className="flex flex-col justify-between pt-2 items-center gap-5 w-1/4 h-full border-2 ">
            <h2 className="text-2xl">Useful Links</h2>
            <div className="grid-cols-1 grid grid-rows-3 pb-2 text-lg grid-flow-col-dense gap-6">
                <h4>Home</h4>
                <h4>Fashion</h4>
                <h4>Accesoris</h4>
                <h4>Cart</h4>
                <h4>Wish List</h4>
                <h4>Contact</h4>
            </div>

        </div>

        <div className="flex flex-col  items-center justify-between pt-2  w-1/4 h-full border-2 ">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque explicabo ducimus nobis magni, consectetur quo fugiat libero corrupti porro? Architecto!</p>

        </div>

        <div className="flex flex-col  items-center justify-between pt-2   w-1/4 h-full border-2 ">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque explicabo ducimus nobis magni, consectetur quo fugiat libero corrupti porro? Architecto!</p>

        </div>

    </div>;
}
