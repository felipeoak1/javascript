// Objetos (Básico)

/* Com o uso de objetos também podemos armazenar diversos tipos de valores. porém fornecemos não somente os valores, mas as chaves também, ou seja, ele não é indexado automaticamente. */

pessoa1 = {
	nome:"Felipe",
	sobrenome: "Carvalho",
	idade: 26,
}

console.log(pessoa1.nome)
console.log(pessoa1.sobrenome)
console.log(pessoa1.idade)

// Criando objetos com função
function criaPessoa(nome, sobrenome, idade) {
    // é possível a sua simplificação, já que estamos atribuindo os mesmos nomes para chave e valor. Fazemos a simplificação deixando somente um valor: nome, sobrenome, idade
    return {
        nome: nome,
        sobrenome: sobrenome, 
        idade: idade,
    }
}

let pessoa1 = criaPessoa("pedro", "josé", 55)
console.log(pessoa1.nome)

// Também podemos declarar funções nos nossos objetos, que são chamadas de métodos. Não necessitam da palavra function 
function criaPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome, 
        idade: idade,
        fala () {
            console.log("Olá, mundo!")
        }
    }
}


// Além disso dentro do objeto podemos utilizar o ****this****, que permite a utilização dos atributos e métodos que já estão dentro daquele objeto, assim sendo possível criar uma interação entre eles.

pessoa1 = {
	nome:"Felipe",
	sobrenome: "Carvalho",
	idade: 26,
	fala() {
		console.log(`${this.nome} ${this.sobrenome} está falando.`)
	},
    incrementaIdade() {
        ++this.idade
    }
}

pessoa1.fala()
console.log(pessoa1.idade)
pessoa1.incrementaIdade()
console.log(pessoa1.idade)