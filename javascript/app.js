const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd5e3304d98mshf8809c0f0ab8d4bp13b6f3jsn78c260d99cd1',
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    }
};

const input = document.querySelector('input')
const searchResults = document.querySelector('.search-results')
const topSearchesContainer = document.querySelector('.top-searches')
const everyResultContainer = document.querySelector('.every-result-container')
const button = document.querySelector('button')
button.addEventListener('click', () => {
    const query = input.value
    const url = `https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes&q=${query}`;
    fetch(url, options)
        .then(res => res.json())
        .then(data => {
            const results = data.results;
            searchResults.innerHTML = '';
            if (results.length === 0) {
                const noResults = document.createElement('p');
                noResults.textContent = 'Sorry:( No results found.';
                noResults.style.color = 'red'
                noResults.style.fontSize = '35px'
                noResults.style.width = '100%'
                noResults.style.textAlign = 'center'
                searchResults.appendChild(noResults);
            } else {
                results.forEach(result => {
                    const foodDiv = document.createElement('div');
                    foodDiv.classList.add('food-item');

                    const foodImage = document.createElement('img');
                    foodImage.src = result.thumbnail_url;
                    foodDiv.appendChild(foodImage);

                    const foodName = document.createElement('p')
                    foodName.textContent = result.name;
                    foodDiv.appendChild(foodName);
                    searchResults.appendChild(foodDiv);
                });
            }

            searchResults.style.display = 'flex';
            searchResults.style.flexWrap = 'wrap'

        })


        .catch(err => {
            console.error('Hata:', err);
        });
});


document.getElementById('searchInput').addEventListener('input', function () {
    const input = this.value.trim();
    const searchButton = document.getElementById('searchButton');
    if (input === '') {
        searchButton.disabled = true;
    } else {
        searchButton.disabled = false;
    }
});

document.getElementById('searchInput').addEventListener('input', function (event) {
    const inputValue = this.value;
    const onlyLetter = /^[a-zA-Z\s]*$/;

    if (!onlyLetter.test(inputValue)) {
        this.value = inputValue.slice(0, -1);
    }
});

const url1 = `https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes&q=turkey`
fetch(url1, options)
    .then(res => res.json())
    .then(data => {
        const results = data.results
        results.forEach(result => {
            const foodDiv = document.createElement('div');
            foodDiv.classList.add('food-item');

            const foodImage = document.createElement('img');
            foodImage.src = result.thumbnail_url;
            foodDiv.appendChild(foodImage);

            const foodName = document.createElement('p')
            foodName.textContent = result.name;
            foodDiv.appendChild(foodName);
            topSearchesContainer.appendChild(foodDiv);

        });

        topSearchesContainer.style.display = 'flex';
        topSearchesContainer.style.flexWrap = 'wrap'
    })