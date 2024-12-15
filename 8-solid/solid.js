'use strict'

class Billing{
    amount;
    constructor(amount){
        this.amount = amount;
    }
    CalculateTotal(){
        return (`${this.amount}`)
    }
}

class FixedBilling extends Billing{
    constructor(amount){
        super(amount)
    }
    CalculateTotal(){
        return (`${this.amount}`)
    }
}

class HourBilling extends Billing{
    constructor(amount, hour){
        super(amount);
        this.hour = hour
    }
    CalculateTotal(){
        return (`${this.amount*this.hour}`)
    }
}


class ItemBilling extends Billing{
    constructor(amount, item){
        super(amount);
        this.item = item
    }
    CalculateTotal(){
        return (`${this.amount*this.item}`);
    }
}

const billing = new Billing(10);
console.log(billing.CalculateTotal());

const fixedBilling = new FixedBilling(10);
console.log(fixedBilling.CalculateTotal());

const hourBilling = new HourBilling(10, 10);
console.log(hourBilling.CalculateTotal());

const itemBilling = new ItemBilling(10, 20);
console.log(itemBilling.CalculateTotal());