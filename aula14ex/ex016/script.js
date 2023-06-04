function verificar() {
    var inicio = window.document.getElementById("inicio")
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById("passo")
    var res1 = window.document.querySelector("#text")
    var res = window.document.querySelector("#text1")
    res.innerHTML = ''

    if (Number(inicio.value) > Number(fim.value) || Number(passo.value) > Number(fim.value)) {
        res.innerHTML = 'Informe um valor correto.'
    } else {
        res1.innerHTML = 'Contando...'
        var c = Number(inicio.value)
        while ( c <= Number(fim.value)) {
            res.innerHTML += `${c} `
            c += Number(passo.value)
        }
    }
}