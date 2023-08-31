// A função callback passada para dentro da promise é uma função síncrona, ou seja, é jogada pra dentro da call stack.
const apiCall = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('Sucesso!')
        // reject('Erro!')
    }, 1000)
})

/* Podemos obter os resultados das nossas promises com o uso do async/await ou then/catch. */

// Com o uso do then/catch ele joga nosso código pra dentro da call back queue do node, ou seja, ele é retirado da call stack para que o código possa seguir sem aguardar a sua resposta. 
apiCall.then((resposta) => {
    console.log(resposta)
}).catch((erro) => {
    console.log(erro)
})

console.log('Depois da promise...')

// Caso seja necessário a resposta da nossa Promise para continuidade do nosso código, podemos jogar todo nosso código restante dentro do .then ou utilizar o async/await.
async function run(){
    try {
        const resposta = await apiCall
        console.log(apiCall)
    } catch (erro) {
        console.log(erro)
    }
}

run()