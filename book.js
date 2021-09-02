const searchButton = () => {
    const inputField = document.getElementById('inputField');
    const searchText = inputField.value;
    inputField.value = '';
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    // console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(json => displayResults(json.docs))
}

const displayResults = docs => {
    const searchResult = document.getElementById('searchResult');
    docs.forEach(book => {
        console.log(book);
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="col">
        <div class="card h-100">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                <h6 class="card-title"><b>Book Name:</b> ${book.title}</h6>
                <p class="card-title"><b>Author Name: </b>${book.author_name}</p>
                <p class="card-title"><b>Publisher: </b>${book.publisher.slice(0, 2)}</p>
                <p class="card-title"><b>First publish: </b>${book.first_publish_year}</p>
                
            </div>
        </div>
        `;
        searchResult.appendChild(div);
    });

}