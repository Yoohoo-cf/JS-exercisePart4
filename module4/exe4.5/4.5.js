"use strict";

const fetchJoke = async() => {

    try {
        const response = await fetch(`https://api.chucknorris.io/jokes/random`);
        const jsonData = await response.json();
        console.log("Random Joke: ", jsonData.value);
    } catch (error) {
        console.log("Error: ", error.message)
    }
}

fetchJoke();