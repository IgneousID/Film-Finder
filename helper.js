// Populates dropdown menu with all the available geenres
const populateGenreDropdown = (genres) => {
    const select = document.getElementById('genres')

    for (const genre of genres) {
        let option = document.createElement("option");
        option.value = genre.id;
        option.text = genre.name;
        select.appendChild(option);
    }
};


//Returns the current genre sleection form the dropdown menu 
const getSelectedGenre = () => {
    const selectedGenre = document.getElementById('genres').value;
    return selectedGenre;
}

//Displays the like and dislike buttons on the page
const showBtns = () => {
    const btnDiv = document.getElementById('likeOrDislikeBtns');
    btnDiv.removeAttribute('hidden');
}

//Clear the current movie from the screen
const clearCurrentMovie = () => {
    const moviePosterDiv = document.getElementById('moviePoster');
    const movieTextDiv = document.getElementById('movieText');

    moviePosterDiv.innerHTML = '';
    movieTextDiv.innerHTML = '';
}

//after liking a movie, clears the current movie form the screen and gets another random movie
const likeMovie = () => {
    clearCurrentMovie();
    showRandomMovie();
}

// after disliking a movie, clears the current movie from the screen and gets another rtanfom movie
const dislikeMovie = () => {
    clearCurrentMovie();
    showRandomMovie();
}

//create html for the poster
const createMoviePoster = (posterPath) => {
    const moviePosterUrl = `https://image.tmbd.org/t/p/original/${posterPath}`;

    const posterImg = document.createElement('img');
    posterImg.setAttribute('src', moviePosterUrl);
    posterImg.setAttribute('id', 'moviePoster');

    return posterImg
}

//creates html for movie title
const createMovieTitle = (title) => {
    const titleHeader = document.createElement('h1');
    titleHeader.setAttribute('id', 'movieTitle');
    titleHeader.innerHTML = title;

    return titleHeader;
}

// creates html for movie overview 
const createMovieOverview = () => {
    const overviewParagraph = document.createElement('p');
    overviewParagraph.setAttribute('id', 'movieOverview');
    overviewParagraph.innerHTML = overview;

    return overviewParagraph;
}

//returns a random movie from the first page of movies
const getRandomMovie = (movies) => {
    const randomIndex = Math.floor(Math.random() * movies.length);
    const randomMovie = movies[randomIndex];
    return randomMovie;
}

// use the DOM to create html to display the movie
const displayMovie = (movieInfo) => {
    const moviePosterDiv = document.getElementById('moviePoster');
    const movieTextDiv = document.getElementById('movieText');
    const likeBtn = document.getElementById('likeBtn');
    const dislikeBtn = document.getElementById('dislikeBtn');

    //create html content containing movie info
    const moviePoster = createMoviePoster(movieInfo.poster_path) // is this going to break this?
    const titleHeader = createMovieTitle(movieInfo.tile);
    const overviewText = createMovieOverview(movieInfo.overview);

    //append title, poster, overview to page
    moviePosterDiv.appendChild(moviePoster);
    movieTextDiv.appendChild(titleHeader);
    movieTextDiv.appendChild(overviewText);

    showBtns();
    likeBtn.onclick = likeMovie;
    dislikeBtn.onclick = dislikeMovie
}