function verificar() {
    var inicio = window.document.getElementById("inicio")
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById("passo")
    var res = window.document.querySelector("#text1")
    res.innerHTML = ''

    var c = Number(inicio.value)
    while ( c <= Number(fim.value)) {
        res.innerHTML += `${c} `
        c += Number(passo.value)
    }
}