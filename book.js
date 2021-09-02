const searchButton = () => {
    // const coverImg = document.getElementById('inputField');
    // const cover = coverImg.value;
    // fetch(`https://covers.openlibrary.org/b/id/${cover}-M.jpg`)
    //     .then(res => res.json())
    //     .then(data => displayResults(data))

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
    searchResult.textContent = '';
    if (docs.length == 0) {
        document.getElementById('total').innerHTML = `<h4 style="color:red">Please type valid book name, your result isn't found"</h4>`;
    }
    docs.forEach(book => {

        // <img src="..." class="card-img-top" alt="...">
        console.log(book);
        const bookLength = book.lenght;
        document.getElementById('total').innerText = 'Total length' + bookLength;
        console.log(bookLength);

        const div = document.createElement('div');
        div.innerHTML = `
        <div class="col">
        <div class="card h-100">
        <img src="$" class="card-img-top" alt="...">
                <div class="card-body">
                <h6 class="card-title"><b>Book Name:</b> ${book.title}</h6>
                <p class="card-title"><b>Author Name: </b>${book.author_name}</p>
                <p class="card-title"><b>Publisher: </b>${book.publisher}</p>
                <p class="card-title"><b>First published: </b>${book.first_publish_year}</p>
                
            </div>
        </div>
        `;
        searchResult.appendChild(div);
    });

}

