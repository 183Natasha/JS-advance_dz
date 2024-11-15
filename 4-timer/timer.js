'use strict'


function timeBeforeNewYear() {

    let today = new Date();
    let year = today.getFullYear() + 1;
    let endTimer = new Date(year, 0, 1, 0, 0, 0)
    let timeBetween = endTimer - new Date();


    let mesNew = Math.trunc(timeBetween / (1000 * 3600 * 24 * 30))
    let dayNew = Math.trunc(timeBetween / (1000 * 3600 * 24) - (mesNew * 30));
    let hourNew = Math.trunc(timeBetween / (1000 * 3600) - (mesNew * 30 * 24 + dayNew * 24));
    let minuteNew = Math.trunc(timeBetween / (1000 * 60) - (mesNew * 30 * 24 * 60 + dayNew * 24 * 60 + hourNew * 60));
    let secondNew = Math.trunc(timeBetween / (1000) - (mesNew * 30 * 24 * 60 * 60 + dayNew * 24 * 60 * 60 + hourNew * 60 * 60 + minuteNew * 60));

    document.querySelector('.mes__stay').innerText = mesNew;
    document.querySelector('.day__stay').innerText = dayNew;
    document.querySelector('.hour__stay').innerText = hourNew;
    document.querySelector('.minute__stay').innerText = minuteNew;
    document.querySelector('.second__stay').innerText = secondNew;
}


setInterval(timeBeforeNewYear, 1000)

