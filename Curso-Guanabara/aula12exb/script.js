function verificar() {
    var data = new Date()
    var ano = window.document.getElementById("txtano")
    var idade = data.getFullYear() - Number(ano.value)
    
    var res = window.document.getElementById("text")
    var sex = window.document.getElementsByName("radsex")
    var sexo = ''
    
    if (Number(ano.value) > data.getFullYear() || ano.value.length == 0) {
        res.innerHTML = 'Informe um número válido.'
    }      else {
        var img = window.document.createElement('img')
        img.setAttribute('id', 'img')
        
        if (sex[0].checked) {
            sexo = 'Homem'
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'img/pexels-victoria-rain-1648377.jpg')
            } else if (idade <= 18) {
                img.setAttribute('src', 'img/pexels-eduardo-barrientos-15836966.jpg')
            } else if (idade < 60 ) {
                img.setAttribute('src', 'img/pexels-chloe-1043474.jpg')
            } else {
                img.setAttribute('src', 'img/pexels-andrea-piacquadio-834863.jpg')
            }
        } 
        else {
            sexo = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                img.src = 'img/pexels-vickie-photography-16953069.jpg'
            } else if (idade <= 18) {
                img.src = 'img/pexels-anastasiya-gepp-1462630.jpg'
            } else if (idade < 60 ) {
                img.src = 'img/pexels-tima-miroshnichenko-5717583.jpg'
            } else {
                img.src = 'img/pexels-andrea-piacquadio-788567.jpg'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${sexo} com ${idade} anos.`
        res.appendChild(img)
    }
}


