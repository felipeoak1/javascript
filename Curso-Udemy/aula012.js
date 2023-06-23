/* O setTimeout e setInterval são funções síncronas do JavaScript comumente confundidas como assíncronas, mas na verdade elas se tornam assíncronas dependendo das funcionalidades que foram passadas, ou seja, assíncronas são funções que podem executar em paralelo a outras funções, elas não precisam esperar que uma função finalize para que possam continuar com a sua próxima tarefa. Existem duas formas de códigos assíncronos no JavaScript, as callbacks e promises. */

// Exemplo de função com setInterval e um contador, onde a cada um segundo será demonstrado um número.

let count = 0
setIntervar(function () {
	console.log(count++)
}, 1000)