'use srtict'

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(response => response.json())
    .then(({abilities}) => {
        return fetch(abilities[0].ability.url)
    })
    
    .catch(()=>console.log("Произошла ошибка"))