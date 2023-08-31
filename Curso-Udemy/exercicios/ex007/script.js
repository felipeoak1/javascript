let paragrafos = document.getElementById('paragrafos').getElementsByTagName("p")

//Pegando propriedades CSS da página
let css = document.body
console.log(getComputedStyle(css).backgroundColor)



for ( c of paragrafos){
    c.style.backgroundColor = 'yellow'
}
