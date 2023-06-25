let task = document.getElementById('itarefas')
let add = document.getElementById('botaoAdicionar')
let lista = document.getElementById('lista')
let tasks = []
add.addEventListener('click', addTask)

function addTask() {
    let icon = document.createElement('span')
    icon.setAttribute('class', 'material-symbols-outlined')
    icon.innerHTML = ' delete'

    let button = document.createElement('button')
    button.setAttribute('id', 'botaodelete')
    button.appendChild(icon)

    let div = document.createElement('div')
    div.setAttribute('id', 'divbotao')

    let li = document.createElement('li')    
    tasks.push(task.value)
    li.innerHTML += `${task.value}`

    div.appendChild(li)
    div.appendChild(button)
    lista.appendChild(div)
}