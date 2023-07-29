const tmdbKey = "b9d3d6b446866eac778e945605764097";
const tmdbBaseUrl = "https://api.themoviedb.org/3"; // i dont think this is the actual one, if it breaks keep looking
const playBtn = document.getElementById("playBtn");

const getGenres = async () => {
  const genreRequestEndpoint = "/genre/movie/list";
  const requestParams = `?api_key=${tmdbKey}`;

  const urlToFetch = `${tmdbBaseUrl}${genreRequestEndpoint}${requestParams}`;

  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      const genres = jsonResponse.genres;
      return genres;
    }
  } catch (error) {
    console.error(error);
  }
};

const getMovies = async () => {
  const selectedGenre = getSelectedGenre();
  if (!selectedGenre) {
    console.error("No genre selected");
    return []; // Return an empty array or handle the case appropriately.
  }

  const discoverMovieEndpoint = "/discover/movie";
  requestParams = `?api_key=${tmdbKey}&with_genres=${selectedGenre}`;
  const urlToFetch = `${tmdbBaseUrl}${discoverMovieEndpoint}${requestParams}`;

  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      const movies = jsonResponse;
      console.log(movies);
      return movies;
    }
  } catch (error) {
    console.log(error);
  }
};

const getMovieInfo = async (movie) => {
  const movieId = movie.id;
  const movieEndPoint = `/collection/${movieId}`;
  const requestParams = `?api_key=${tmdbKey}`;
  const urlToFetch = `${tmdbBaseUrl}${movieEndPoint}${requestParams}`;
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      const movieInfo = jsonResponse;
      return movieInfo;
    }
  } catch (error) {
    console.log(error);
  }
};

// Gets a list of movies and ultimately displats the info of a random movie from the list
const showRandomMovie = async () => {
  const getMovieInfo = document.getElementById("movieInfo");
  if (getMovieInfo.childNodes.length > 0) {
    clearCurrentMovie();
  }
  const movies = await getMovies();
 
    const randomMovie = getRandomMovie(movies);
    const info = await getMovieInfo(randomMovie);
    displayMovie(info);

};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;
