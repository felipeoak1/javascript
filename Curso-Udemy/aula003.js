// Array Básico
let array = ["Luis", "Felipe", "Andre", "Pedro"]

// Alterando valores do nosso array através dos índices.
array[0] = 'Pedro'

// Adicionando um valor a posição final do array.
array[array.length] = "Lucas"

// Adicionando um valor a posição final do array.
array.push('Jonas')

// Adicionando um valor a posição inicial do array.
array.unshift('Tales')

// Removendo o último elemento do array. Também é possível armazenar o valor retirado.
array.pop()

// Oposto ao pop, retira o primeiro elemento do array e também é possível armazenar o valor removido.
array.shift() 

// Removendo o valor de um índice específico. Desta forma não haverá uma reatribuição de índices, o valor será removido mas seu espaço permanecerá como undefined.
delete array[1]

// Verificando o tipo do array 
console.log(typeof(array))

// Checando se o array é uma instância de Array. Retorna true ou false.
console.log(array instanceof Array)

// Podemos acessar índices inexistentes no array, retornando um undefined
console.log(array[40])

// Exibindo a quantidade de elementos do array.
console.log(array.length)

// Exibindo o elemento na posição de elementos do array.
console.log(array[0])

console.log(array)