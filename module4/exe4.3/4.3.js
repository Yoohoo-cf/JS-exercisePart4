"use strict";

let formElement = document.querySelector("form");

formElement.addEventListener("submit", function(e) {
    e.preventDefault()

    // Clear the old results
    document.getElementById("results").innerHTML = '';

    let query = document.querySelector("#query").value;
    let uri = `https://api.tvmaze.com/search/shows?q=${query}`;

    fetch(uri)
        .then(function (res) {
            if (res.status == 200){
                return res.json();
            } else {
                throw new Error("Invalid search query")
            }
        })
        .then((data) => {
            data.forEach(tv=> {

                // Create article element
                let articleElement = document.createElement("article");

                // Create h2 element for name
                let nameElement = document.createElement("h2");
                nameElement.textContent = tv.show.name;
                articleElement.appendChild(nameElement);

                // Create <a> element for url
                let urlElement = document.createElement("a");
                urlElement.href = tv.show.url;
                urlElement.target="_blank";
                urlElement.textContent = "Details-Url";
                articleElement.appendChild(urlElement);

                // Create img element for show image
                let imgElement = document.createElement("img");
                imgElement.src = tv.show.image?.medium;
                imgElement.alt = tv.show.name;
                articleElement.appendChild(imgElement);

                // Create div element for Summary
                let sumElement = document.createElement("div");
                sumElement.textContent = tv.show.summary;
                articleElement.appendChild(sumElement);

                document.getElementById("results").appendChild(articleElement);

            })
        })
        .catch((err) => {
            console.log("Error: ", err.message)
        })
})

