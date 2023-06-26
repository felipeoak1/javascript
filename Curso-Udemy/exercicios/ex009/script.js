let task = document.getElementById('itarefas')
let add = document.getElementById('botaoAdicionar')
let lista = document.getElementById('lista')

let tasks = []
let divs = []
let class_div = 0

let button;
let div1, div2;
let classNumber;

add.addEventListener('click', addTask)


function addTask() {

    let tarefa = task.value

    let icon = document.createElement('span')
    icon.setAttribute('class', 'material-symbols-outlined')
    icon.innerHTML = ' delete'
    
    button = document.createElement('button')
    button.setAttribute('id', 'botaodelete')
    button.appendChild(icon)
    button.addEventListener('click', deleteTask)

    let div = document.createElement('div')
    div.setAttribute('id', 'divbotao')
    div.setAttribute('class', class_div)

    let li = document.createElement('li')    
    tasks.push(task.value)
    li.innerHTML += `${tarefa[0].toUpperCase() + tarefa.slice(1)}`

    div.appendChild(li)
    div.appendChild(button)
    lista.appendChild(div)
    divs.push(div)
    class_div++
}

function deleteTask() {

}