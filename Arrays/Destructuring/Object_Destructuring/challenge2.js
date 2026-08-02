/*
Given:

const movie = {
    title: "Inception",
    director: "Christopher Nolan",
    releaseYear: 2010
};

Create variables with these names:

movieTitle
movieDirector
year

using destructuring only.
*/

const movie = {
    title: "Inception",
    director: "Christopher Nolan",
    releaseYear: 2010
}

const { title: movieTitle, director: movieDirector, releaseYear: year, rating } = movie;
console.log(movieTitle);
console.log(movieDirector);
console.log(year);
console.log(rating);
console.log(movie.rating);
console.log(movie);

