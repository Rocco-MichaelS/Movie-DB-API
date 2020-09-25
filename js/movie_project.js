

const htmlLoad = document.getElementById('movieList');
const apiURL = 'https://natural-nine-macaroni.glitch.me/movies'
// Api request for Json movie objects/////////////
const getMovies = () => fetch(apiURL)
    .then(response => response.json())
    .then(movies => {
            movies.forEach(({title, rating, id}) => {
            let divCreate = document.createElement("div")
            console.log(` ${title} - rating: ${rating}`)
            divCreate.innerHTML = `${title} - rating: ${rating}
                                     <button onclick="Delete(this)" 
                                     data-rmv=${id}>Remove this Title</button>`

            htmlLoad.appendChild(divCreate)
            divCreate.addEventListener("click", divCreate.remove)
             })


    })


console.log(getMovies())
////////////////////////////////////////
//Add Movie Function***********

const addMovie = () => {
    let stars = document.getElementById('movieRating').value;
    let userInput = document.getElementById('addMovie').value;
    console.log(userInput)
    let createInput = document.createElement("div")
    createInput.innerHTML = `${userInput} - rating: ${stars}  
                            <button onclick="Delete(this)" 
                            id = "movieDel">delete</button>`
    htmlLoad.appendChild(createInput)
    createInput.addEventListener("click", createInput.remove)
    createInput.addEventListener("click", Delete)

    //OMDB Movie Data********************
    const url = 'http://www.omdbapi.com/?apikey='+omdbAPIKEY+'&s='+userInput+''
    const omdbDATA = () => fetch(url)
        .then(response => response.json())

                .then(data => console.log(data))
                .catch(error => console.log(error))

            console.log(omdbDATA())

//*****ADD to Glitch JSON Objects***********

    let addTitle = {
        id: '',
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

const Delete = (id) => {
 let movieId = $(id).data('rmv')
    fetch(`${apiURL}/${movieId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then(response => response)
        .then(() => {
            console.log(`deleted successfully`)
        })
        .catch(error => console.error('didnt work'));

}