const searchBook = () => {
    const searchField = document.getElementById("search-field");
    const searchValue = searchField.value;
    searchField.value = '';
    // console.log(searchValue)
    const url = `https://openlibrary.org/search.json?q=${searchValue}`
    // console.log(url)
    fetch(url)
        .then(Response => Response.json())
        .then(data => dispalySearchResult(data.docs))
}
// searchBook()

const dispalySearchResult = (docs) => {
    const searchResult = document.getElementById("search-result");
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