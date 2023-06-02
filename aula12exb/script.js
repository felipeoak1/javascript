function verificar() {
    var ano = window.document.getElementById("txtano")
    var data = new Date()
    var idade = data.getFullYear() - Number(ano.value)
    var res = window.document.getElementById("text")
    var sex = window.document.getElementsByName("radsex")
    var sexo = ''
    res.style.textAlign = 'center'
    
    if (Number(ano.value) > data.getFullYear()) {
        window.alert("ERRO")
    } else if (sex[0].checked) {
        sexo = 'Homem'
        res.innerHTML = `Detectamos ${sexo} com ${idade} anos.`
    } else if (sex[1].checked) {
        sexo = 'Mulher'
        res.innerHTML = `Detectamos ${sexo} com ${idade} anos.`
    }




}

