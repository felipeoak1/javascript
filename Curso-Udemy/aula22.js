//ForEach

/* Similar as funções map, filter e reduce o forEach irá iterar sobre os elementos de um array, mas não irá aplicar nenhuma alteração no array original, mas é possível através da sua função de callback tornando ele um método mutante. Também possui os parâmetros de valor, índice e o próprio array.

Uma das diferenças com o map é o seu retorno, enquanto no map o retorno é um novo array com os valores modificados, o forEach retorna undefined. Outra diferença é que não é possível o encadeamento de funções com o forEach devido o seu retorno ser undefined. */

const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let total = 0

a1.forEach(e=>{console.log(e)})

a1.forEach(v=>{
    total += v
})

console.log(total)
