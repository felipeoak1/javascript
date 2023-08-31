// Função geradora

/* Uma função geradora permite com que possamos iterar sobre diversos elementos sem que tenhamos que armazenar todos os valores na memória, assim a função geradora permite um ganho de perfomance no nosso código. Na sua inicialização se diferencia pelo uso do * ao nome function, para acessarmos os valores da nossa função precisamos utilizar o next, que irá buscar o próximo valor que sera iterado, caso não exista mais valores, undefined será retornado. */


// Os valores desta função geradora são finitos, então caso tentemos fazer uma iteração maior do que o seu tamanho, valores undefined serão retornados.
function* geradora1() {
    yield 'Valor 1'
    yield 'Valor 2'
    yield 'Valor 3'
}

const g1 = geradora1()

// for (let c of g1) {
//     console.log(c)
// }

// console.log(g1.next().value)
// console.log(g1.next().value)
// console.log(g1.next())
// console.log(g1.next()) 


/* Já neste exemplo os valores são infinitos, por isso podemos iterar sobre ele quantas vezes quisermos. */
function* geradora2() {
    let i = 0
    
    while(true) {
        i++
        yield i 
    }
}

const g2 = geradora2()


// for (let c of g2) {
//     console.log(c)
//     if (c > 20) {
//         return
//     }
// }

// console.log(g2.next().value)
// console.log(g2.next().value)
// console.log(g2.next().value)
// console.log(g2.next().value)

// Função geradora que está servindo de exemplo para complementar outra função geradora. 
function* geradora3() {
    yield 0
    yield 1
    yield 2
}

// Neste exemplo estamos iterando uma outra função geradora antes da iteração desta função.
function* geradora4() {
    yield* geradora3()
    yield 3
    yield 4
    yield 5
}

const g4 = geradora4()

for (let c of g4) {
    console.log(c)
}

function* geradora5() {
    yield function() {
        console.log('Vim do yield1')
    }

    yield function() {
        console.log("Vim do yield2")
    }
}

const g5 = geradora5()
g5.next().value()
g5.next().value()

const func1 = g5.next().value()
const func2 = g5.next().value()
func1()
func2()