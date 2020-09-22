


const apiURL = 'https://hexagonal-crystal-bit.glitch.me/movies'

const getMovies = () => fetch(apiURL)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

console.log(getMovies())