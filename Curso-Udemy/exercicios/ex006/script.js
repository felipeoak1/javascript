let section = document.querySelector("#container")
const elementos = [
    {tag: 'p', texto: 'frase 1'},
    {tag: 'p', texto: 'frase 2'},
    {tag: 'p', texto: 'frase 3'},
    {tag: 'p', texto: 'frase 4'},
    {tag: 'p', texto:'frase 5'},
]

for (let c = 0; c < elementos.length; c++) {
    let { tag, texto } = elementos[c]
    let element = document.createElement(tag)
    element.setAttribute('id', c)
    element.innerText = texto
    section.appendChild(element)
}

let str = 'teste de iteracao do for of    '

 for ( c of str) {
    console.log(c)
 }
