import React, { useState, useEffect } from "react";
import axios from "axios";

import Movie from "./Movie";

const MovieRow = ({ title, url }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchMovies() {
            const request = await axios.get(url);
            setMovies(request.data.results);
            return request;
        }

        fetchMovies();
    }, [url]);

    return (
        <>
            <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
            <div className="relative flex items-center">
                <div
                    id={"slider"}
                    className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
                >
                    {movies.map((movie, id) => {
                        return <Movie key={id} movie={movie} />;
                    })}
                </div>
            </div>
        </>
    );
};

export default MovieRow;
