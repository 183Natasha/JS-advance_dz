"use strict"
let birthday = "2010-11-11";
birthday = new Date(birthday)

const now = new Date();

let day2 = new Date((now.getFullYear() - 14), now.getMonth(), (now.getDate() +1))
console.log(day2)

function control(now, birthday) {
    console.log("now " + now.getTime())
    console.log("day2 " + day2.getTime())
    console.log("birthday " + birthday.getTime())
    
    if (birthday.getTime() <= day2.getTime()) {
        return (true)
    }
    else {
        return (false)
    }
}

console.log(control(now, birthday))