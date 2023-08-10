// O this se referencia a própria função, ou seja, ela cria seu próprio this. Além de que com o uso do this ele transforma nossa function em um object.
// function myFunction(){
//     this.name = 'Felipe'

//     const arrowFunc = () => {
//         this.lastname = 'Mateus'
//     }

//     arrowFunc()
// }

// console.log(new myFunction())
// console.log(this)

// O this na arrow function se referencia ao contexto da função, classe ou onde quer que a arrow function tenha sido criada, neste exemplo que foi criada no próprio escopo global, ele se referencia ao node.
// const arrowFunc = () => {
//     this.name = 'Mateus'
// }

// Arrow function não possui o pâmetro do JavaScript "arguments".
function sum(firstparam, ...args){
    console.log(firstparam, args)
}

sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

// Arrow function short syntax returns
const arrowDouble = () => 2*2

// Com operador ternário
const algumNumero = 10

const arrowTriple = () => algumNumero >= 10 ? 'Maior igual a 10' : 'Menor que 10'

console.log(arrowTriple())

// Object return with arrow function
const getUser = () => ({
        id: 123,
        name: 'Mateus'
})

console.log(getUser())