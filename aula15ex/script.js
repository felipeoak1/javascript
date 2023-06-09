var num = window.document.getElementById("inicio")
var caixa = window.document.getElementById("values")
var array = []


function addList(){

    if (Number(num.value) in array) {
        alert("Número já definido")
    } else {
        array.push(Number(num.value))
        caixa.innerHTML += `<option value="Teste">${array[array.length-1]}</option>`
    }

}

function verificar() {
    var res = window.document.getElementById("text1")   
    var p = document.createElement('p')
    res.innerHTML = ''
    
    p.innerHTML = `Ao todo temos ${array.length} <br>`
    p.innerHTML += `O maior valor informado foi ${Math.max(...array)}<br>`
    p.innerHTML += `O menor valor informado foi ${Math.min(...array)} <br>`
    p.innerHTML += `A soma de todos os valores é ${array.reduce( (a, b) => a + b, 0)} <br>`
    p.innerHTML += `A média dos valores digitados é ${array.reduce( (a, b) => a / b, 0)}`
    res.appendChild(p)
    
}
