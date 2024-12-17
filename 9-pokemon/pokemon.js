'use strict'
const request = new XMLHttpRequest();
request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
request.send();
request.addEventListener('load', function () {
    const { abilities } = JSON.parse(this.responseText);

    request.open('GET', abilities[0].ability.url);
    request.send();


    request.addEventListener('load', function () {
        const { effect_entries} = JSON.parse(this.responseText);
        for (let el in effect_entries ) {
            if (effect_entries [el].language.name === 'en') {
                console.log(effect_entries [el].effect)
            }
        }
    })
})
