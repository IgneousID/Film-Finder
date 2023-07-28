const tmdbKey = 'b9d3d6b446866eac778e945605764097';
const tmdbBaseUrl = 'https://api.themoviedb.org/';// i dont think this is the actual one, if it breaks keep looking
const playBtn = document.getElementById('playBtn');

const getGenres = async () => {
    const genreRequestEndpoint = "3/genre/movie/list";
    const requestParams = `?api_key=${tmdbKey}`;

    const urlToFetch = `${tmdbBaseUrl}${genreRequestEndpoint}${requestParams}`;

    try {
        const response = await fetch(urlToFetch).then(response => {
            if (response.ok) {
                const jsonResponse =  response.json();
                console.log(jsonResponse)
                return genres;
            }
        })
    }
    catch (error) {
        console.error(error)
    }
}

const getMovies = () => {
    const selectedGenre = getSelectedGenre;
}

const getMovieInfo = () => {

}


// Gets a list of movies and ultimately displats the info of a random movie from the list
const showRandomMovie = () => {
    const getMovieInfo = document.getElementById('movieInfo');
    if (movieInfo.childNodes.length > 0) {
        clearCurrentMovie();
    };
};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;