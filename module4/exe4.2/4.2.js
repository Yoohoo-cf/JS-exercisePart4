"use strict";

const formElement = document.querySelector("#search");

formElement.addEventListener("submit", async function(e) {
    e.preventDefault();

    const query = document.querySelector("#query").value;
    let uri = `https://api.tvmaze.com/search/shows?q=${query}`;

    try {
        const response = await fetch(uri);
        console.log(response)
        const jsonData = await response.json();
        console.log(jsonData)
    } catch (error) {
        console.log("Error: ", error.message)
    }
})
