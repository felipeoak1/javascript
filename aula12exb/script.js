function verificar() {
    var ano = window.document.getElementById("txtano")
    var data = new Date()
    var idade = data.getFullYear() - Number(ano.value)
    var res = window.document.getElementById("text")
    var sex = window.document.getElementsByName("radsex")
    var sexo = ''
    var foto = window.document.getElementById("foto")
    res.style.textAlign = 'center'
    var img = window.document.createElement('img')
    img.setAttribute('id', 'img')
    foto.style.textAlign = 'center'
    foto.style.padding = '10px 0px '


    if (Number(ano.value) > data.getFullYear() || ano.value.length == 0) {
        res.innerHTML = 'Informe um número válido.'
    } else if (sex[0].checked) {
        sexo = 'Homem'
        if (idade >= 0 && idade <= 10) {
            img.src = 'img/pexels-victoria-rain-1648377.jpg'
        } else if (idade > 10 && idade <= 18) {
            img.src = 
        } else if (idade > 18 && idade < 60 ) {
            img.src = 
        } else {
            img.src = 
        }
        res.innerHTML = `Detectamos ${sexo} com ${idade} anos.`
        foto.appendChild(img)
    } else if (sex[1].checked) {
        sexo = 'Mulher'
        res.innerHTML = `Detectamos ${sexo} com ${idade} anos.`
    }




}

