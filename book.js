//search button section
const searchButton = () => {
    const inputField = document.getElementById('inputField');
    const searchText = inputField.value;
    if (searchText == '') {
        document.getElementById('totalArray').innerHTML = `<h4 style="color:red">Please type a valid book name, your result isn't found"</h4>`;
    }
    inputField.value = '';
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(response => response.json())
        .then(json => displayResults(json.docs))
}

//display result section
const displayResults = docs => {
    document.getElementById('totalArray').innerText = 'Total Books in Library ' + docs.length;
    const searchResult = document.getElementById('searchResult');
    searchResult.textContent = '';
    if (docs.length <= 0) {
        document.getElementById('totalArray').innerHTML = `<h4 style="color:red">Please type a valid book name, your result isn't found"</h4>`;
    }
    docs.forEach(book => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="columWidth">
           <div class="col ">
              <div class="card h-100 background ">
                  <div class="card-body">
                  <h6 class="card-title"><b class="commonColor">Book Name:</b> ${book.title}</h6>
                  <p class="card-title"><b class="commonColor">Author Name: </b>${book.author_name}</p>
                  <p class="card-title"><b class="commonColor">Publisher: </b>${book.publisher}</p>
                  <p class="card-title"><b class="commonColor">First published: </b>${book.first_publish_year}</p>
                
              </div>
           </div>
        </div>
        `;
        searchResult.appendChild(div);
    });

}

