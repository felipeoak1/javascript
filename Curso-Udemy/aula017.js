// Método Splice

/* As mesmas funcionalidades do shift, unshift, pop e push na mesma função. */

const nomes = ["Maria", "João", "Ana", "Pedro", "Julia"]
// Os parâmetros são: (Indice inicial, Quantos elementos serão removidos, Adicionar elemento1, elemento2, elemento3)
// Os elementos serão adicionados na posição inicial que foi passada.
//Retorna um array com os elementos removidos.
const removidos = nomes.splice(-3, Number.MAX_VALUE, 'Bruno', )
console.log(nomes, removidos)

// Unshift
nomes.splice(0, 0, 'Lucas')

// Shift
nomes.splice(0, 1)

// Push
nomes.splice(nomes.length, 0, 'Pedro')

// Pop
nomes.splice(-1, 1)

/* Concatenação de Arrays */

const a1 = [1, 2, 3]
const a2 = [4, 5, 6]
const a3 = a1.concat(a2, [7, 8, 9], 'Luiz')
const a4 = [...a1,"Pedro", ...a2]
console.log(a4)

