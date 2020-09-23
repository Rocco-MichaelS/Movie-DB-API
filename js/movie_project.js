

const htmlLoad = document.getElementById('movieList');
const apiURL = 'https://natural-nine-macaroni.glitch.me/movies'
// Api request for Json movie objects/////////////
const getMovies = () => fetch(apiURL)
    .then(response => response.json())
    .then(movies => {
        movies.forEach(({title, rating, id}) => {
            let divCreate = document.createElement("div")
            console.log(`id#${id} - ${title} - rating: ${rating}`)
            divCreate.innerHTML = `id#${id} - ${title} - rating: ${rating}`
            htmlLoad.appendChild(divCreate)
             })
    .catch(err => console.log('Error Loading Page!'))
    })

console.log(getMovies())
////////////////////////////////////////