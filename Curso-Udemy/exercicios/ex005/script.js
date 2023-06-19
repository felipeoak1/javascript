let res = document.getElementById("hora")
let data = new Date()
let dia_semana = data.getDay()
let dia_mes = data.getDate()
let mes = data.getMonth()
let ano = data.getFullYear()
let hora = data.getHours()
let minutos = data.getMinutes()

let dias_da_semana = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabádo', 'Domingo']
let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

res.innerHTML = `${dias_da_semana[dia_semana]}, ${dia_mes} de ${meses[mes]} de ${ano}. Hora: ${hora}:${minutos}`