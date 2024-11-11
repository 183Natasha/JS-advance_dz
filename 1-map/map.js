let array = [{id:1, name: 'Вася'},
{id:2, name: 'Петя'},
{id:1, name: 'Вася'},]



let arr = array.map (e => e.id)
let arrIdSet = [... new Set(arr)]
console.log(arrIdSet.map(id => array.find(a => a.id === id)))