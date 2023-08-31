// Factory Functions

/* Funções para criação de objetos */

function criaPessoa(nome, sobrenome){
    return {
        nome,
        sobrenome,
        // getter
        // Com a utilização do getter nossa função pode ser chamada diretamente como se fosse um atributo.
        get fala(){
            let teste = 'oi'
            console.log(teste)
        },
        // setter
        set fala(valor){
            teste = valor
            console.log(teste.split(" ")[1])
        },
    }
}

const p1 = criaPessoa('pedro', 'luiz')
p1.fala = 'OLÁ pedro'
