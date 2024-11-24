'use strict'

class Car{
    #make;
    #model;
    #run;

    constructor (make, model, run){
        this.#make = make;
        this.#model = model;
        this.#run = Number(run);
    }    

    set addKm(km){
        this.#run += km;
    }

    get getKm(){
        return (`Пробег данного автомобиля - ${this.#run} км`);
    }

    info (Car){
        return (`Марка - ${this.#make}, 
            \nМодель - ${this.#model}, 
            \nПробег - ${this.#run}`);
    }
}

let car1 = new Car('Nissan', 'almera', '123');
console.log(car1);
car1.addKm = 100;
console.log(car1.getKm)
console.log(car1.info())