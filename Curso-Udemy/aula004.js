function saudacao () {
    console.log("Bom dia!")
}

saudacao()

function soma(x=0, y=0) {
    return x + y
}
console.log(soma())

// Função anônima
const raiz = function(x) {
    return x ** 0.5
}

console.log(raiz(9))