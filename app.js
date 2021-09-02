const searchBook = () => {
    const searchField = document.getElementById("search-field");
    const searchValue = searchField.value;
    searchField.value = '';


    // error handel purpose use if else and alert
    if (searchValue === '') {
        alert("please write some text")
    }
    else {

        const url = `https://openlibrary.org/search.json?q=${searchValue}`
        // console.log(url)
        fetch(url)
            .then(Response => Response.json())

            // for count search result 
            .then(data => {
                const totalFound = document.getElementById("total-found").innerText = data.numFound;
                dispalySearchResult(data.docs)
            })

    }
}



// for showing search result in display
const dispalySearchResult = (docs) => {
    const searchResult = document.getElementById("search-result");
    searchResult.innerHTML = '';
    docs.forEach(doc => {
        console.log(doc)
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `

        <div class="col">
            <div class="card">
                <img src="https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${doc.title}</h5>
                    <p class="card-text">${doc.author_name}</p>
                    <p class="card-text">${doc.first_publish_year}</p>
                </div>
            </div>
        </div>
        `
        searchResult.appendChild(div)
    })
}