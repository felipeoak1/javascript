/* Exemplo de imprecisão no JavaScript com decimais */

let num1 = 0.7
let num2 = 0.1

num1 += num2

console.log(parseFloat(num1.toFixed(2)))
// Ou podemos utilizar diretamente o Number()

/* Além disso podemos resolver diretamente com cálculos */
let soma = ((num1 * 100) + (num2 * 100)) / 100
console.log(soma) 


