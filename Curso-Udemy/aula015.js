// Função Construtora

function Pessoa(nome, sobrenome) {
    const id = 12345
    const metodoInterno = ()=>{console.log('Não posso ser acessado de fora.')}
    // Com a utilização do this é possível ser acessado por fora.
    this.nome = nome
    this.sobrenome = sobrenome
    
    this.metodo = ()=>{console.log("Sou um método")}
}

const p1 = new Pessoa('Luiz', 'Otávio')
const p2 = new Pessoa('José', 'Antônio')
p2.metodo()

console.log(p1)
console.log(p2.nome)