"use strict";

const formElement = document.querySelector("#search");

formElement.addEventListener("submit", async function (e){
    e.preventDefault();

    let query = document.querySelector("#query").value;
    let uri = `https://api.chucknorris.io/jokes/search?query=${query}`

    try {
        const response = await fetch(uri);
        const jsonData = await response.json();

        let articleElement = document.createElement("article");

        jsonData.result.forEach(joke => {
            let pElement = document.createElement("p");
            pElement.innerHTML = joke.value;

            articleElement.appendChild(pElement);
        })

        document.querySelector("#results").appendChild(articleElement);
    } catch (error) {
        console.log(error.message)
    }
})
