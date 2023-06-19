function enviarFormulario(event) {
    event.preventDefault(); // Impede a atualização da página

    // Aqui você pode adicionar o código para processar os dados do formulário
    // ou realizar outras ações desejadas

  }
  
let submit = document.getElementById("submit")
submit.addEventListener("click", calcular)

function calcular() {
    let altura = document.getElementById('ialtura').value
    let peso = document.getElementById("ipeso").value
    let res = document.getElementById("res")
    let imc = Number.parseFloat(peso) / (Number.parseFloat(altura) ** 2)
    
    if (altura.length == 0 || peso.length == 0 ) {
        
        res.innerHTML = '<p style="background-color:red">Forneça um valor válido.</p>'

    } else {

        if (imc <= 18.5) {
            console.log(altura.length)
            res.innerHTML = `<p>Seu IMC é de ${imc.toFixed(2)} (Abaixo do peso)</p>`
        } else if ( imc <= 24,9) {
            res.innerHTML = `<p>Seu IMC é de ${imc.toFixed(2)} (Peso normal)</p>`
        } else if ( imc <= 29,9) {
            res.innerHTML = `<p>Seu IMC é de ${imc.toFixed(2)} (Sobrepeso)</p>`
        } else if ( imc <= 34,9) {
            res.innerHTML = `<p>Seu IMC é de ${imc.toFixed(2)} (Obesidade grau 1)</p>`
        } else if ( imc < 39,9) {
            res.innerHTML = `<p>Seu IMC é de ${imc.toFixed(2)} (Obesidade grau 2)</p>`
        } else {
            res.innerHTML = `<p>Seu IMC é de ${imc.toFixed(2)} (Obesidade grau 3)</p>`
        }
    }

}