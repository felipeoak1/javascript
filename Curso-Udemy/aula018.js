// Filter

/* Filter serve para literalmente filtrar um objeto, retornando um array com a mesma quantidade de elementos ou menos. */

// Retorne os números maiores que 10.
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
// Retorne as pessoas que tem o nome com 5 letras ou mais.
// Retorne as pessoas com mais de 50 anos.
// Retorne as pessoas cuja nome termina com a letra "a".
const pessoas = [
                {nome: "Felipe", idade:62}, 
                {nome: "Maria", idade: 23},
                {nome: "Eduardo", idade: 55},
                {nome: "Letícia", idade: 19},
                {nome: "Rosana", idade: 32},
                {nome: "Wallace", idade: 47}
            ]


console.log(numeros.filter(e=>{
    return e > 10 
}))

console.log(pessoas.filter(e=>{
    return e.nome.length > 5
}))



