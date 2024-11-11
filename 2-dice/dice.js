'use strict'

function randomeDice(tipyDice) {
    let minNumber = 1;
    let maxNumber = tipyDice.replace('d', '');
    if (maxNumber < 4) {
        return ('Слишком маленькое число dice')
    }
    return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
}

console.log(randomeDice('d20'))