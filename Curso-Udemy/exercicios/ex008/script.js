const relogio = document.getElementById('relogio')
const iniciar = document.getElementById('iniciar')
const pausar = document.getElementById('pausar')
const zerar = document.getElementById('zerar')

let l1;
let controle;
let seconds = 0
let minutes = 0
let hours = 0

function start () {

    if (controle) {
        return
    }
  
    clearInterval(l1)
    
    l1 = setInterval( 
        function () {
            
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
        controle = true
        relogio.style.color = 'black'
        relogio.innerHTML = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    }, 1000)

    let pause = () => {
        clearInterval(l1)
        controle = false
        relogio.style.color = 'red'
    }

    pausar.addEventListener('click', pause)
}


function reset () {
    seconds = 0
    minutes = 0
    hours = 0   
    
    relogio.style.color = 'black'
    relogio.innerHTML = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`

}


iniciar.addEventListener('click', start)
zerar.addEventListener('click', reset)