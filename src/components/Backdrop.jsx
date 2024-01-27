import React, { useState, useEffect } from "react";
import axios from "axios";
import requests from "../requests/Requests";

const Backdrop = () => {
    const [movies, setMovies] = useState([]);

    const movie = movies[Math.floor(Math.random() * movies.length)];

    useEffect(() => {
        axios.get(requests.TRENDING).then((response) => {
            setMovies(response.data.results);
        });
    }, []);

    return <div>Backdrop</div>;
};

export default Backdrop;
