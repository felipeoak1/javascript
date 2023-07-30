// Filter

/* Filter serve para literalmente filtrar um objeto e não alterar o elemento. Retornando um array com a mesma quantidade de elementos ou menos.
Obs.: A função é aplicada para cada elemento do array, ou seja, realiza a função em um elemento, retorna e vai para o próximo elemento. */

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const pessoas = [
                {nome: "Bruno", idade:62}, 
                {nome: "Maria", idade: 23},
                {nome: "Eduardo", idade: 55},
                {nome: "Letícia", idade: 19},
                {nome: "Rosana", idade: 32},
                {nome: "Wallace", idade: 47}
            ]

// Retorne os números maiores que 10.
console.log(numeros.filter(e=>{
    return e > 10 
}))

// Retorne as pessoas que tem o nome com 5 letras ou mais.
console.log(pessoas.filter(e=>e.nome.length >= 5))

// Retorne as pessoas com mais de 50 anos.
console.log(pessoas.filter(e=>{
    return e.idade > 50
}))

// Retorne as pessoas cuja nome termina com a letra "a".
console.log(pessoas.filter(e=>{
    // e.nome[e.nome.length - 1] == "a"
    return e.nome.toLowerCase().endsWith("a")
}))

