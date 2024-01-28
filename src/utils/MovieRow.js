import requests from "../requests/Requests";

export const movieRows = [
    {
        title: "Trending",
        url: requests.TRENDING,
    },
    {
        title: "Top Rated",
        url: requests.TOP_RATED,
    },
    {
        title: "Action",
        url: requests.ACTION,
    },
    {
        title: "Comedy",
        url: requests.COMEDY,
    },
    {
        title: "Horror",
        url: requests.HORROR,
    },
];
