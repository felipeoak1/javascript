// Escopo de variáveis

/* Let possui escopo de bloco, o que ocasiona na criação de uma nova variável cada vez que a declaramos em um novo bloco. O JS procura a variável requisitada de dentro para fora. */
let nome = 'Pedro'
if (2 < 4) {
    let nome = 'André'
    console.log(nome)
    if (2 < 4) {
        let nome = 'Bruno'
        console.log(nome)
    }
}

console.log()

/* Var tem escopo de função, o que acontece aqui é que toda vez que a declaramos novamente, realmente o seu valor é alterado. Com var também é possível utilizarmos a variável antes mesmo da sua declaração, o que pode ocasionar em erros inesperados no nosso código. */
var nome2 = 'Leticia'
if (2 < 5) {
    var nome2 = 'Bruno'
    console.log(nome2)
    if (2 < 5) {
        var nome2 = 'Andre'
        console.log(nome2)
    }
}

console.log(nome, nome2)