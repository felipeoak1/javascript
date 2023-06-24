const relogio = document.getElementById('relogio')
const iniciar = document.getElementById('iniciar')
const pausar = document.getElementById('pausar')
const zerar = document.getElementById('zerar')

let seconds = 0
let minutes = 0
let hours = 0

let inicio = () => {

    if (seconds == 59) {
        seconds = 0
        minutes++
    }

    if (minutes == 59) {
        minutes = 0
        hours++
    }

    if (hours == 24) {
        hours = 0
    }

    seconds++
    relogio.innerHTML = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}

let start = () => {
    setInterval(
        inicio, 1000
    )
}

let pause = () => {
    setTimeout(
        clearInterval(start), 2
    )
}

let reset = () => {
    seconds = 0
    minutes = 0
    hours = 0   
      
    relogio.innerHTML = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}


iniciar.addEventListener('click', start)

pausar.addEventListener('click', pause)

zerar.addEventListener('click', reset)
