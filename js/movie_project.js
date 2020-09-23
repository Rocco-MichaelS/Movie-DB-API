


const apiURL = 'https://natural-nine-macaroni.glitch.me/movies'
// Api request for Json movie objects/////////////
const getMovies = () => fetch(apiURL)
    .then(response => response.json())
    .then(movies => {
        movies.forEach(({title, rating, id}) => {
            console.log(`id#${id} - ${title} - rating: ${rating}`)
            // `<p> ${movies.title} <br> ${movies.rating} <br> ${movies.id} </p> `
             })
         })

console.log(getMovies())
////////////////////////////////////////