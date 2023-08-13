/* Higher Order Functions */

const array = [
    {name: 'Iphone', price: 5000, quantity: 2},
    {name: 'MacBook Pro', price: 20000, quantity: 1},
    {name: 'Magic Mouse', price: 1000, quantity: 5},
]

/* .find */

// Retorna o primeiro valor true que ele encontrar e retorna o objeto.
const find = array.find((product)=>product.price > 1000 )

console.log({find})


/* .findIndex */

// Retorna o index do elemento, a posição do elemento.
const findIndex = array.findIndex((product)=>product.name === 'Magic Mouse' )

console.log(findIndex)

/* .some e .every */

// Retorna true ou false case um item atenda a condição
const some = array.some((product)=>{return product.price > 1000})

console.log(some)

// Retorna true ou false se todos os produtos forem true ou false
const every = array.every((product)=>{return product.price >= 1000})

console.log(every)


/* Map, filter e reduce */

// Sempre retornará uma array com a mesma quantidade de elementos do array original.
const map = array.map((product)=>{
    return {...product, subtotal: product.price * product.quantity}
})

console.log(map)

// .filter 
const filter = array.filter((product)=>{return product.quantity > 1})

console.log(filter)

// .reduce

const reduce = array.reduce((accumulator, product)=>{
    return accumulator += product.quantity * product.price 
}, 0)

console.log(reduce)