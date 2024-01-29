import React from "react";
import Favorites from "../components/Favorites";

const Account = () => {
    return (
        <>
            <div className="w-full text-white">
                <img
                    className="w-full h-[400px] object-cover"
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/145e8a49-7b91-411b-97e4-22ce63567859/US-en-20240115-trifectadaily-perspective_alpha_website_large.jpg"
                    alt=""
                />
                <div className="bg-black/60 fixed top-0 left-0 w-full h-[400px]"></div>
                <div className="absolute top-[20%] p-4 md:p-8">
                    <h1 className="text-3xl md:text-5xl font-bold">
                        Favorite Shows
                    </h1>
                </div>
            </div>
            <Favorites />
        </>
    );
};

export default Account;
