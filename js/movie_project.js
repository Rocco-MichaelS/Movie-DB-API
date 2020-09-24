

const htmlLoad = document.getElementById('movieList');
const apiURL = 'https://natural-nine-macaroni.glitch.me/movies'
// Api request for Json movie objects/////////////
const getMovies = () => fetch(apiURL)
    .then(response => response.json())
    .then(movies => {
        movies.forEach(({title, rating, id}) => {
            let divCreate = document.createElement("div")
            console.log(`id#${id} - ${title} - rating: ${rating}`)
            divCreate.innerHTML = `${title} - rating: ${rating} `
            htmlLoad.appendChild(divCreate)
             })
    // .catch(err => console.log('Error Loading Page!'))
    })

console.log(getMovies())
////////////////////////////////////////
//Add Movie Function***********

const addMovie = () =>{
    let stars = document.getElementById('movieRating').value;
    let userInput = document.getElementById('addMovie').value;
    console.log(userInput)
    let createInput = document.createElement("div")
    createInput.innerHTML = `${userInput} - rating: ${stars}  `
    htmlLoad.appendChild(createInput)

//*****ADD to Glitch JSON Objects***********

    let addTitle = {
        title: userInput,
        rating: stars
    };
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(addTitle),
    };
    fetch(apiURL, options)
        .then( response => console.log(response) ) /* review was created successfully */
        .catch( error => console.error(error) );

}






const url = 'http://www.omdbapi.com/?apikey='+ omdbAPIKEY + '&s='
const omdbDATA = () => fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))

console.log(omdbDATA())




























/* handle errors */