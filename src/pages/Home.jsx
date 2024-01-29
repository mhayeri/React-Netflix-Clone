import React from "react";
import Backdrop from "../components/Backdrop";
import MovieRow from "../components/MovieRow";

import { movieRows } from "../utils/MovieRow";

const Home = () => {
    return (
        <>
            <Backdrop />
            {movieRows.map(({ id, title, url }) => (
                <MovieRow key={id} rowId={id} title={title} url={url} />
            ))}
        </>
    );
};

export default Home;
