'use strict'

class Person {
    constructor(race, name, language){
        this.race = race;     // Свойство раса
        this.name = name;   // Свойство имя
        this.language = language;   // Свойство язык
    }  ;
    speak(){
        console.log(`Меня зовут ${this.name}, мой родной язык - ${this.language}`)
    }
}

//Создаем дочерний класс Orc
class Orс extends Person{
    constructor (race, name, language, weapon) {
        super(race, name, language);
        this.weapon = weapon;
    }
    speak(){
        return(`Я здесь! Меня зовут ${this.name}, мой родной язык - ${this.language}`)
    } //Модификация метода "говорить" для Орка 
    hit(weapon){
        if (weapon == false){
            return (`Нанесение удара невозможно. У персонажа ${this.name} нет оружия.`) ;        
        } else{
            return  (`${this.name} нанес удар, выбранное оружие - ${weapon}`) ; 
        }
    }// Метод hit
}


// //Создаем дочерний класс Elf
class Elf extends Person{
    static spellsAll = [`'Плач банши'`, `'Ослепительное солнце'`];
    constructor (race, name, language, spells) {
        super(race, name, language);
        this.spells = spells;        
    }
    speak(){
        return(`Светлого неба. Меня зовут ${this.name}, мой родной язык - ${this.language}`)
    }
    spell(spells){
        return  (`${this.name} применил заклинание ${spells}`)
    }
    creatSpell(newSpell){
        if (Elf.spellsAll.find (el => el == newSpell)){
            return (`Данное заклинание было создано ранее`)
        } else{
            Elf.spellsAll.push(newSpell);
            return (`Создано новое заклинание ${newSpell}. 
                \nТеперь ${this.race} может применять следующие заклинания: ${Elf.spellsAll}`)
        }
    }
}



const orc = new Orс( 'орк', 'Pppг','оркский');
const elf = new Elf('эльф', 'Элланиэль', 'эльфийский' );


console.log(orc.speak())
console.log(elf.speak())

console.log(orc.hit(orc.weapon = false))
console.log(orc.hit(false))
console.log(orc.hit('топор'))

console.log(elf.spell(`'Водный поток'`))
console.log(elf.creatSpell(`'Зов вейлы'`))
console.log(elf.creatSpell(`'Плач банши'`))

