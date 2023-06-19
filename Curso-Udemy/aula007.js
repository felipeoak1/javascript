/* Para utilizarmos o objeto date, teremos que inicializar o seu construtor new, já que se trata de uma função construtora. Assim poderemos obter diversos valores relacionados a data como, hora, minuto, segundo, dia, mês, ano e muitos outros. */
const data = new Date()

// Como se trata de uma função construtora é possível passarmos parâmetros para o objeto Date.
const data1 = new Date(0)
console.log(data.toString())

/* O valor zero passado como parâmetro para o objeto representa o marco zero da data Unix, ou seja, milissegundos calculados desde 01/01/1970 que foi considerada a época Unix. Os valores passados como parâmetro são timestamps, ou seja, milissegundos. 
Obs. Como existem fusos horários diferentes o valor retornado do date(0) pode estar com a data diferente da que esperamos (01/01/1970), assim como acontece no nosso fuso, onde estamos com uma diferença de menos três horas, para isso acrescentamos podemos adicionar três horas na nossa data. */
const tresHoras = 60 * 60 * 3 * 1000
const data2 = new Date(0 + tresHoras)
console.log(data.toString())

//Assim podemos adicionar hora, minuto e segundos para obtermos a data que quisermos 
const umDia = 60 * 60 * 24 * 1000
const data3 = new Date(0 + umDia)
console.log(data.toString())

/* Lembrando que os timestamps fornecidos como parâmetro serão calculados desde a data do marco zero e o retorno será a data inicial mais o timestamp fornecido.
Obs. Quando não oferecemos parâmetro nenhum para o objeto o retorno será a data atual do nosso sistema. */

/* Outras forma que podemos acessar datas específicas é fornecendo diretamente o ano, o número do mês, o dia, a hora, minuto, segundos e milessimos. 
Obs. O mês é contado a partir de zero. A contagem de meses é de 0 a 11. */
const data4 = new Date(2019, 3, 20, 15,14,27,500)
console.log(data4.toString())

// Podemos fazer omissão de valores, entretanto é necessário o fornecimento do ano e mês que queremos. O tratamento é realizado automaticamente pelo JS.
const data5 = new Date(2023, 4)
console.log(data5.toString())

// Também podemos acessar a data fornecendo uma String. (Formato mais utilizado)
const data6 = new Date('2019-04-20 20:20:59')
console.log(data6.toString())

//Basicamente as formas possíveis de acessarmos datas são: 
//new Date() // Data atual
//new Date(0) // Valor do time stamp
//new Date(dataString) // Valor do tipo String que deve estar em um formato reconhecido pelo método Date.parse()
//new Date(ano, mes, dia, hora, minuto, segundo) // Explicitando a data

const data7 = new Date()

console.log(
    '\n',
    `Dia do mês - ${data7.getDate()}\n`,
    `Mês começando do zero - ${data7.getMonth()}\n`,
    `Ano - ${data7.getFullYear()}\n`,
    `Horas - ${data7.getHours()}\n`,
    `Minutos - ${data7.getMinutes()}\n`,
    `Segundos - ${data7.getSeconds()}\n`,
    `Milissegundos - ${data7.getMilliseconds()}\n`,
    `Dia da semana - ${data7.getDay()}` // Semana também começa do zero.
)

function acrescentaZero(num) {
    return num >= 10 ? num: `0${num}`
}


// Exemplo de função para data formatada
function dataFormatada(data) {
    const dia = acrescentaZero(data.getDate())
    const mes = acrescentaZero(data.getMonth() + 1)
    const ano = acrescentaZero(data.getFullYear())
    const hora = acrescentaZero(data.getHours())
    const minutos = acrescentaZero(data.getMinutes())
    const segundos = acrescentaZero(data.getSeconds())

    return `${dia}/${mes}/${ano} - ${hora}:${minutos}:${segundos}`
}

const data8 = new Date('2023-06-9 16:04:59')
const dataBrasil = dataFormatada(data8)
console.log(dataBrasil)