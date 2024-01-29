import requests from "../requests/Requests";

export const movieRows = [
    {
        id: 1,
        title: "Trending",
        url: requests.TRENDING,
    },
    {
        id: 2,
        title: "Top Rated",
        url: requests.TOP_RATED,
    },
    {
        id: 3,
        title: "Action",
        url: requests.ACTION,
    },
    {
        id: 4,
        title: "Comedy",
        url: requests.COMEDY,
    },
    {
        id: 5,
        title: "Horror",
        url: requests.HORROR,
    },
];
