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