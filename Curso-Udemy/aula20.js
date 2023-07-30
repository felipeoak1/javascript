// Reduce

/* Reduce funciona como um acumulador, com ele é possível reduzir todo o array em um valor só com o valor total daquele array que foi passado. Possui um parâmetro a mais que é o acumulador, onde podemos passar o seu valor inicial e altera-lo para um array ou object. 
Obs.: Com a função reduce também podemos obter o mesmo comportamento das funções map e filter, porém isso é uma má prática e não deve ser realizada.
Obs.: Se não definirmos um valor para o acumulador, o seu valor padrão será o primeiro elemento.
Obs.: A função é aplicada para cada elemento do array, ou seja, realiza a função em um elemento, retorna e vai para o próximo elemento.
*/


const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const pessoas = [
                {nome: "Bruno", idade:62}, 
                {nome: "Maria", idade: 23},
                {nome: "Eduardo", idade: 55},
                {nome: "Letícia", idade: 19},
                {nome: "Rosana", idade: 32},
                {nome: "Wallace", idade: 47}
            ]

// Some todos os números.
console.log(numeros.reduce((a, e)=>{
    return a + e
}, 0))

// Retorne um array com os pares
console.log(numeros.reduce((a, e)=>{
    if (e % 2 == 0) {
        a.push(e)
    }
    return a
}, []))

// Retorne um array com o dobro dos valores.
console.log(numeros.reduce((a, e)=>{
    a.push(e*2)
    return a
}, []))

// Retorne a pessoa mais velha.
console.log(pessoas.reduce((a,e, arr)=>{
    if (a.idade > e.idade){
        return a
    }
}))
