//search button section
const searchButton = () => {
    const inputField = document.getElementById('inputField');
    const searchText = inputField.value;
    if (searchText == '') {
        document.getElementById('total').innerHTML = `<h4 style="color:red">Please type a valid book name, your result isn't found"</h4>`;
    }
    inputField.value = '';
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    // console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(json => displayResults(json.docs))


}
//display result section
const displayResults = docs => {
    document.getElementById('total').innerText = 'Total length ' + docs.length;
    const searchResult = document.getElementById('searchResult');
    searchResult.textContent = '';
    if (docs.length <= 0) {
        document.getElementById('total').innerHTML = `<h4 style="color:red">Please type a valid book name, your result isn't found"</h4>`;
    }
    docs.forEach(book => {

        // console.log(book);
        // const bookLength = book.lenght;
        // document.getElementById('total').innerText = 'Total length ' + bookLength;
        // console.log(bookLength);

        const div = document.createElement('div');
        div.innerHTML = `
        <div class="col">
        <div class="card h-100">
        <img src="${book.cover}" class="card-img-top" alt="...">
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

const displayImg = cover => {
    const coverUrl = `https://covers.openlibrary.org/b/id/${cover}-M.jpg`;
    fetch(coverUrl)
        .then(res => res.json())
        .then(data => displayResults(data))
}