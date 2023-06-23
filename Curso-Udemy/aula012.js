/* O setTimeout e setInterval são funções síncronas do JavaScript comumente confundidas como assíncronas, mas na verdade elas se tornam assíncronas dependendo das funcionalidades que foram passadas, ou seja, assíncronas são funções que podem executar em paralelo a outras funções, elas não precisam esperar que uma função finalize para que possam continuar com a sua próxima tarefa. Existem duas formas de códigos assíncronos no JavaScript, as callbacks e promises. */

// Exemplo de função com setInterval e um contador, onde a cada um segundo será demonstrado um número.

let count = 0
setIntervar(function () {
	console.log(count++)
}, 1000)

/* O primeiro parâmetro da nossa função setInterval também é uma função, e quando uma função é passada como parâmetro para outra nós a chamamos de callback, quanto ao nosso segundo parâmetro se trata do tempo em milissegundos que aquela função ficará acontecendo. Como não demos uma funcionalidade para que aconteça a sua parada, o código ficará rodando infinitamente. */

// Exemplo de função com setTimeout onde executamos uma mensagem de boas vindas após cinco segundos, também possui as mesmas características do setInterval em relação aos argumentos passados.

setTimeout(function () {
	console.log('Bem Vindo(a)')
}, 5000)

// Outro detalhe em que ambas as funções podemos passar outros parâmetros, que serão os parâmetros da nossa função callback.

function greeting(x) {
	console.log(x)
}

console.log(setInterval(greeting, 2000, 'Hello World!'))

/* Entretanto, como podemos perceber nenhuma destas funções possui uma parada, ou seja, elas continuarão infinitamente e para resolvermos isto basta utilizarmos o clearTimeout ou clearInterval, onde colocaremos as nossas funções dentro de variáveis e a passaremos como parâmetro para a função clearInterval ou clearTimeout */

function greeting(x) {
	console.log(x)
}

const welcome = setInterval(greeting, 3000, 'Hello World')

setTimeout(function () {
	console.log('Encerrando execução')
	clearInterval(welcome)
}, 5000)