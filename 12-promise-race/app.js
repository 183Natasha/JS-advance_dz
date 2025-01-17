'use strict'

async function getProducts(id) {
    try{
        const productResponse = await(fetch('https://dummyjson.com/products/' + id));
        const product = await productResponse.json();
        return (product.title)
    } catch(error){
        console.error(`Error: ${error.message}`)
    }
    
}

async function newFunction(arrayProducts) {
    return Promise.race(arrayProducts)
}

newFunction([
    getProducts(1),
    getProducts(2),
    getProducts(3),
])
.then((firstProduct) => console.log(firstProduct))
.catch((error) => console.error(`Error: ${error.message}`))
