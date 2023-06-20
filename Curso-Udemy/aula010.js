/* Atribuição via desestruturação (Objetos) */
let pessoa = {
    nome: 'José',
    idade: 33,
    cidade: 'São Paulo',
    endereco: {
        rua: 5,
        q: 4,
        casa: 25,
    }
}

let { cidade:sp } = pessoa
let { endereco: {rua} } = pessoa
console.log(sp, rua)
