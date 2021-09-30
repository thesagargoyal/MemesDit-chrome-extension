fetch('https://meme-api.herokuapp.com/gimme')
    .then(data => data.json())
    .then(jokeData => {
        const imgURL = jokeData.url;
        const jokeElement = document.getElementById('jokeElement');
        jokeElement.innerHTML = `<img src="${imgURL}" id="img" alt="${jokeData.title}">`;
    })

