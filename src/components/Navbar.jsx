import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
            <Link to="/">
                <h1 className="text-red-600 font-bold text-4xl cursor-pointer">
                    NETFLIX
                </h1>
            </Link>

            <div className="">
                <Link to="/login">
                    <button className="text-white pr-4 rounded cursor-pointer hover:scale-105 duration-300 ">
                        Sign In
                    </button>
                </Link>
                <Link to="/signup">
                    <button className="text-white bg-red-600 px-6 py-2 rounded cursor-pointer hover:scale-105 duration-300">
                        Sign Up
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
