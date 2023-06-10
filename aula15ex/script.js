var num = window.document.getElementById("inicio")
var caixa = window.document.getElementById("values")
var array = []
var m = 0

function addList(){
    var index = array.indexOf(Number(num.value))

    if (index > -1 || Number(num.value) == 0) {
        array.filter( (item,index) => array.indexOf(item) === index );
    } else {
        array.push(Number(num.value))
        caixa.innerHTML += `<option value="Teste">${array[array.length-1]}</option>`
    }
    num.value = ''
}

function verificar() {
    var res = window.document.getElementById("text1")   
    var p = document.createElement('p')
    res.innerHTML = ''
    m = 0
    
    for (var c in array) {
        m += array[c]
    }

    if (array.length == 0) {
        p.innerHTML = 'Adicione um valor.'
    } else {
        console.log(array.length)
        p.innerHTML = `Ao todo temos ${array.length} <br>`
        p.innerHTML += `O maior valor informado foi ${Math.max(...array)}<br>`
        p.innerHTML += `O menor valor informado foi ${Math.min(...array)} <br>`
        p.innerHTML += `A soma de todos os valores é ${array.reduce( (a, b) => a + b, 0)} <br>`
        p.innerHTML += `A média dos valores digitados é ${m / array.length}`
    }

    res.appendChild(p)
    
}
