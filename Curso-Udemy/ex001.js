// Escreva uma função que mostre na tela um número fornecido pelo usuário, porém invertido. Por exemplo, o usuário fornece o número 875 e a função mostra na tela o número 578.

function reverteNumero(n) {
    let nstring = n.toString()
    let res = ''
    let c = nstring.length - 1 
    while (c >= 0) {
        res += nstring[c]
        c--
    }
    return res
}

console.log(reverteNumero(875))

//  Escreva uma função que permita contar o número de vogais contidas em uma string fornecida pelo usuário. Por exemplo, o usuário informa a string “Beterraba”, e a função retorna o número 4 (há 4 vogais nessa palavra).

function contaVogais(n) {
    let vowels = ["a", "e", "i", "o", "u"]
    let contador = 0
    for (c of n) {
       if (vowels.indexOf(c) != -1){
        contador++
       }
    }
    return console.log(contador)
}

contaVogais('olá, tudo bem?')

// Escreva uma função que calcule e retorne o fatorial de um número inteiro fornecido pelo usuário.

function factorial(n) {
    let controle = 1
    for (let c = n; c > 0; c--) {
        controle *= c
    }
    return controle
}

console.log(factorial(6))

//  Escreva uma função em JavaScript que conte quantas vezes um caractere aparece em uma string. Tanto o caractere quanto a string devem ser fornecidos pelo usuário.

function contarCaracteres(n, a) {
    let contador = 0
    
    for (c of n) {
        if (c == a) {
            contador++
        }    
    }
    return contador
}

console.log(contarCaracteres("Olá Josué, tudo bem?", "a"))