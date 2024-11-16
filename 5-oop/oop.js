'use strict'

function Person(race, name, language) {
    this.race = race;     // Свойство расса
    this.name = name;   // Свойство имя
    this.language = language;   // Свойство язык
}

Person.prototype.speak = function(){
    console.log(`Меня зовут ${this.name}, мой родной язык - ${this.language}`)
}

const orc = new Person('орк', 'Pppг','оркский');

orc.speak()



// const orc = new Orс( 'орк', 'Pppг','оркский');
// const elf = new Elf('эльф', 'Элланиэль', 'эльфийский' );