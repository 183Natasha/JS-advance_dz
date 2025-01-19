'use strict'

const buttons = document.querySelector('.buttons')
const clicks = document.querySelector('.clicks')
const clicks__counter = document.querySelector('.clicks__counter')

let counter = 0

buttons.addEventListener('click', (event) => {
    if (event.target.className === 'button') { 
        counter += 1
        clicks__counter.innerHTML = counter

        for (let el of [...buttons.children]){
            el.innerHTML = 'Нажми меня';

            event.target.innerHTML = "Нажата!";
        }
        
    }
    
})