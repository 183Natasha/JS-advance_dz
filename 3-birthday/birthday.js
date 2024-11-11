"use strict"
let birthday = "2010-11-11";
birthday = new Date(birthday)

const now = new Date();

let goodBirthday = new Date((now.getFullYear() - 14), now.getMonth(), (now.getDate() +1))
console.log(goodBirthday)

function control(now, birthday) {
    if (birthday.getTime() <= goodBirthday.getTime()) {
        return (true)
    }
    else {
        return (false)
    }
}

console.log(control(now, birthday))