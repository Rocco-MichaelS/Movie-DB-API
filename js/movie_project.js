

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
    // .catch(err => console.log('Error Loading Page!'))
    })

console.log(getMovies())
////////////////////////////////////////
let userInput = document.getElementById('addMovie').innerHTML.valueOf();
const clickMovie = (userInput) =>
    console.log(userInput)
    document.getElementById('btnSearch').addEventListener('click', )
console.log(clickMovie)

const url = 'http://www.omdbapi.com/?apikey='+ omdbAPIKEY + '&s='
const omdbDATA = () => fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))

console.log(omdbDATA())





























//
// const addMovie = {
//     restaurant_id: 1,
//     name: 'Codey',
//     rating: 5,
//     comments: "This is a really good place for coding and eating"
// };
// const options = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(addMovie),
// };
// fetch(apiURL, options)
//     .then( response => console.log(response) ) /* review was created successfully */
//     .catch( error => console.error(error) ); /* handle errors */