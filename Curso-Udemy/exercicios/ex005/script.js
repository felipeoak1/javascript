let res = document.getElementById("hora")
let data = new Date()
let dia_semana = data.getDay().toString()
let dia_mes = data.getDate().toString().padStart(2 , '0')
let mes = data.getMonth().toString().padStart(2 , '0')
let ano = data.getFullYear()
let hora = data.getHours().toString().padStart(2 , '0')
let minutos = data.getMinutes().toString().padStart(2 , '0')

let dias_da_semana = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabádo', 'Domingo']
let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

res.innerHTML = `${dias_da_semana[dia_semana]}, ${dia_mes} de ${meses[mes]} de ${ano}. Hora: ${hora}:${minutos}`

// Mas podemos utilizar o seguinte código para obter o mesmo resultado apresentado acima.
// res.innerHTML += Intl.DateTimeFormat('pt-BR', { dateStyle: "full", timeStyle: "medium" }).format(new Date())


