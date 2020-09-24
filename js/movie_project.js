

// const htmlLoad = document.getElementById('movieList');
const apiURL = 'https://natural-nine-macaroni.glitch.me/movies'
// Api request for Json movie objects/////////////
const getMovies = () => fetch(apiURL)
    .then(response => response.json())
    .then(movies => {
        let cardText = ''
        movies.forEach(({title, rating, id}) => {
            cardText += `<div class="card"><h5>${title}</h5> <p> rating:${rating}</p> <a>id#:${id}</a></div> `
            $('#movieList').html(cardText)})
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
    createInput.innerHTML = `${userInput} - rating: ${stars} `
    htmlLoad.appendChild(createInput)

//*****ADD to Glitch JSON Objects***********

    let movieDetails = {
        id: '',
        title: userInput,
        rating: stars
    };
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(movieDetails),
    };
    fetch(apiURL, options)
        .then( response => console.log(response) ) /* review was created successfully */
        .catch( error => console.error(error) );

}

//*********Remove Object Function*************//
const removeMovie = () => {
    let userRemove = document.getElementById('deleteMovie').value
    let selectDelete = document.querySelector('#movieList')

    console.log(selectDelete)
}





const url = 'http://www.omdbapi.com/?apikey='+ omdbAPIKEY + '&s='
const omdbDATA = () => fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))

console.log(omdbDATA())




























/* handle errors */