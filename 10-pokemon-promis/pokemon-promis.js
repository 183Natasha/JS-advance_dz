'use srtict'

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(response => response.json())
    .then(({abilities}) => {
        return fetch(abilities[0].ability.url)
    })
    .then(response => response.json())
    .then(({ effect_entries})=>{
        for (let el in effect_entries ) {
            if (effect_entries [el].language.name === 'en') {
                console.log(effect_entries [el].effect)
            }
        }
    })
    
    .catch(()=>console.log("Произошла ошибка"))