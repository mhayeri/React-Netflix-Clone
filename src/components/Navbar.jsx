import React from "react";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
            <h1 className="text-red-600 font-bold text-4xl cursor-pointer">
                NETFLIX
            </h1>
            <div className="">
                <button className="text-white pr-4 rounded cursor-pointer hover:scale-105 duration-300 ">
                    Sign In
                </button>
                <button className="text-white bg-red-600 px-6 py-2 rounded cursor-pointer hover:scale-105 duration-300">
                    Sign Up
                </button>
            </div>
        </div>
    );
};

export default Navbar;
