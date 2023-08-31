/* Atribuição via desestruturação */

/* Atribuição via desestruturação é a retirada de valores ou estruturas de dentro de uma outra estrutura, ou seja, pegamos o valor que desejamos dentro de outra estrutura e copiamos para uma nova. 

Obs. A estrutura de dados original não será afetada, a desestruturação só realiza uma cópia do valor e não retira ele da sua estrutura original. */

// Alterando ordem dos valores com desestruturação 
let a = 'A'
let b = 'B'
let c = 'C'

[a, b, c] = [c, b, a]

console.log(a, b, c) // Erro levantado

/*No exemplo apresentado um erro de inicialização de variável é apresentado, isso ocorre porque é uma das ocasiões onde é necessário a utilização do ponto e vírgula no JavaScript. Para corrigirmos este problema basta acrescentarmos um ponto e vírgula:*/

// Alterando ordem dos valores com desestruturação 
let d = 'A';
let e = 'B';
let f = 'C';

[d, e, f] = [f, e, d]

console.log(d, e, f)

// Copiando valores:
let array = [1, 2, 3 ,4, 5, 6];
const [primeiroNumero, segundoNumero] = array
console.log(primeiroNumero, segundoNumero)
/* Neste exemplo temos um array com números de 1 a 6 e estamos criando duas variáveis que irão receber os dois primeiros valores do array, pois a atribuição começa do primeiro elemento até o último. */

// Também podemos utilizar o operador rest do JavaScript para pegarmos os valores restantes:
let array1 = [1, 2, 3 ,4, 5, 6]
let [primeiroNumero1, segundoNumero2, ...resto1] = array1
console.log(primeiroNumero1, segundoNumero2, resto1)

// Podemos realizar a omissão de valores que não desejamos:
let array3 = [1, 2, 3 ,4, 5, 6]
const [, segundoNumero3, ...resto2] = array3
console.log(segundoNumero3, resto2)

/* A atribuição via desestruturação é fortemente utilizada no JS, uma outra forma de usa-la é com funções: */

function frutas([frutas, frutas2, ...resto]) {
	console.log(frutas, frutas2, resto)
}

let fruits = ['banana', 'pera', 'maça']

frutas(fruits)

// Desestruturação de array dentro de outro array

let lista = [1, ['são paulo', 'brasilia']];

let [,l1] = lista
console.log(l1)
let [sp] = l1
console.log(sp)


const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
let [,li] = numeros
let [,f1] = li
let [,[,teste]] = numeros
console.log(li, f1, teste)