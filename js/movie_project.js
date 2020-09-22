


const apiURL = 'https://hexagonal-crystal-bit.glitch.me/movies'
// Api request for Json movie objects/////////////
const getMovies = () => fetch(apiURL)
    .then(response => response.json())
    .then(movies => {
        for(let movie of movies);
        `<p> ${movies.title} <br> ${movies.rating} <br> ${movies.id} </p> `
    })
    .catch(error => console.log(error));
console.log(getMovies())
////////////////////////////////////////