function newJoke(){
    fetch('https://meme-api.herokuapp.com/gimme')
        .then(data => data.json())
        .then(jokeData => {
            const jokeElement = document.getElementById('jokeElement');
            const imgURL = jokeData.url;
            jokeElement.innerHTML = `<img src="${imgURL}" id="img" alt="${jokeData.title}">`;
        })
}

newJoke()

const button = document.getElementById("btn").addEventListener("click",newJoke);
