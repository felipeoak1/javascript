// Map

/* Map diferentemente do filter irá realizar alterações nos elementos do array e retornará um array exatamente com o mesmo tamanho do original. 
Obs.: Map altera o array original, caso não seja essa intenção precisamos criar um novo objeto e retorna-lo */

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const pessoas = [
    {nome: "Bruno", idade:62}, 
    {nome: "Maria", idade: 23},
    {nome: "Eduardo", idade: 55},
    {nome: "Letícia", idade: 19},
    {nome: "Rosana", idade: 32},
    {nome: "Wallace", idade: 47}
]

// Dobre o valor dos números.
console.log(numeros.map(e=>{
    return e * 2
}))

// Retorne apenas uma string com o nome da pessoa.
console.log(pessoas.map(e=>{
    return e.nome
}))

// Adicione a chave id em cada objeto.
console.log(pessoas.map((e,i)=>{
    e['id']=i
    return e
}))

// Remova apenas a chave "nome" do objeto.
console.log(pessoas.map(e=>{
    delete e.nome
    return e
}))

