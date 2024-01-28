const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const requests = {
    TRENDING: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
    TOP_RATED: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    ACTION: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
    COMEDY: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`,
    HORROR: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`,
};

export default requests;
