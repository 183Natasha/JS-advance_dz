'use strict'
const request = new XMLHttpRequest();
request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
request.send();
request.addEventListener('load', function () {
    const { abilities } = JSON.parse(this.responseText);

    request.open('GET', abilities[0].ability.url);
    request.send();

    request.addEventListener('load', function () {
        const { names } = JSON.parse(this.responseText);
        for (let el in names) {
            if (names[el].language.name === 'en') {
                console.log(names[el].name)
            }
        }
    })
})