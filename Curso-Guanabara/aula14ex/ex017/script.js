function verificar() {
    var numero = window.document.getElementById('txtnumero')
    var select = window.document.getElementById("cxtexto")

    select.innerHTML = ''

    for (var c = 1; c <= 10; c++) {

        var option = document.createElement('option')
        option.innerHTML = 
        ` ${Number(numero.value)} * ${c} = ${Number(numero.value) * c} `
        select.appendChild(option)
    }
}

