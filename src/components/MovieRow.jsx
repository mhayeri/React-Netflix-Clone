import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const MovieRow = ({ rowId, title, url }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchMovies() {
            const request = await axios.get(url);
            setMovies(request.data.results);
            return request;
        }

        fetchMovies();
    }, [url]);

    const slideLeft = () => {
        const slider = document.getElementById("slider" + rowId);
        slider.scrollLeft = slider.scrollLeft - 500;
    };

    const slideRight = () => {
        const slider = document.getElementById("slider" + rowId);
        slider.scrollLeft = slider.scrollLeft + 500;
    };

    return (
        <>
            <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
            <div className="relative flex items-center group">
                <MdChevronLeft
                    size={40}
                    className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
                    onClick={slideLeft}
                />
                <div
                    id={"slider" + rowId}
                    className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
                >
                    {movies.map((movie, id) => {
                        return <Movie key={id} movie={movie} />;
                    })}
                </div>
                <MdChevronRight
                    size={40}
                    className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
                    onClick={slideRight}
                />
            </div>
        </>
    );
};

export default MovieRow;
