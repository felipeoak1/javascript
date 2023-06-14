let num1 = 9.54895
// Pegando a raiz quadrada de um número
let raiz = num1 ** 0.5
// Arredondando para cima
let num2 = Math.floor(num1) 
// Arredondando para baixo
num1 = Math.ceil(num1)
// Arredondando automaticamente para o número mais próximo.
num1 = Math.round(num1)
// Math.random() gera um número aleatório entre 0 e 1, mas sem incluir o número 1.
let aleatorio = Math.random() * (10 - 5 ) + 5 //Retorna um valor aleatório entre 10 e 5
console.log(Math.random())
// Valor de PI
const pi = Math.PI
// No JS divisão por zero não levanta exceções e apresenta um outro tipo de dado númerico que é o infinity, também é avaliado como true.
console.log(100/0)
