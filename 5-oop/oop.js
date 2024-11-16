'use strict'

function Person(race, name, language) {
    this.race = race;     // Свойство раса
    this.name = name;   // Свойство имя
    this.language = language;   // Свойство язык
}

Person.prototype.speak = function(){
    console.log(`Меня зовут ${this.name}, мой родной язык - ${this.language}`)
}


//Создаем дочерний класс Orc
function Orс(race, name, language, weapon) {
    Person.call(this, race, name, language);  // Вызов конструктора Person
    this.weapon = weapon;       // Свойство оружие
}

// Устанавливаем прототип Orc на Person
Orс.prototype = Object.create(Person.prototype);
Orс.prototype.constructor = Orс; // Устанавливаем правильный конструктор

Orс.prototype.hit = function(weapon) {
    if (weapon == false){
        return (`Нанесение удара невозможно. У персонажа ${this.name} нет оружия.`) ;        
    } else{
        return  (`${this.name} нанес удар, выбранное оружие - ${weapon}`) ; // Метод hit
    }
};


//Создаем дочерний класс Elf
function Elf(race, name, language, spells) {
    Person.call(this, race, name, language);  // Вызов конструктора Person
    this.spells = spells;       // Свойство оружие
}

// Устанавливаем прототип Elf на Person
Elf.prototype = Object.create(Person.prototype);
Elf.prototype.constructor = Elf; // Устанавливаем правильный конструктор

let spells = [`'Плач банши'`, `'Ослепительное солнце'`];

Elf.prototype.spell = function(spell) {
    return  (`${this.name} применил заклинание ${spell}`)
};

Elf.prototype.creatSpell = function(newSpell) {
    if (spells.find (el => el == newSpell)){
        return (`Данное заклинание было создано ранее`)
    } else{
        spells.push(newSpell);
        return (`Создано новое заклинание ${newSpell}. 
            \nТеперь ${this.race} может применять следующие заклинания: ${spells}`)
    }
} ;


const orc = new Orс( 'орк', 'Pppг','оркский');
const elf = new Elf('эльф', 'Элланиэль', 'эльфийский' );


orc.speak()
elf.speak()

console.log(orc.hit(orc.weapon = false))
console.log(orc.hit('топор'))

console.log(elf.spell(`'Водный поток'`))
console.log(elf.creatSpell(`'Зов вейлы'`))
console.log(elf.creatSpell(`'Плач банши'`))
console.log(elf.spell(spells[1]))

