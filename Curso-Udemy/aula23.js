// defineProperty - defineProperties

function Produto(nome, preco, estoque){
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave
        value: estoque, // Mostra o valor
        writable: false, // Permissão para editar o valor
        configurable: false, // Se ela é configuravel, caso true, poderá ser criado um novo Object.defineProperty e editar novamente as configurações dela. Configurable como false não permite deletar a variável e nem reconfigurá-la 
    })

    Object.defineProperties(this,{
        nome: {
            enumerable:true,
            value: nome,
            writable: true,
            configurable: true
        },
        sobrenome: {
            enumerable:true,
            value: preco,
            writable: true,
            configurable: true
        }
    })
    // Exemplo de reconfiguração caso o configurable seja true
/*      Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave
        value: estoque, // Mostra o valor
        writable: false, // Permissão para editar o valor
        configurable: true, // Se ela é configuravel, caso true, poderá ser criado um novo Object.defineProperty e editar novamente as configurações dela.  
    }) */
    
}

const p1 = new Produto('Camiseta', 20, 3)

console.log(p1)
console.log(Object.keys(p1))
console.log(Object.values(p1))

console.log("Oi")