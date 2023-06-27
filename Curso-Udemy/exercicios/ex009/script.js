let task = document.getElementById('itarefas')
let addTask = document.getElementById('botaoAdicionar')
let lista = document.getElementById('lista')
let tasks = []
let class_div = 0


addTask.addEventListener('click', addTaskList)


function addTaskList() {
    let button;
    let tarefa = task.value
    let icon = document.createElement('span')
    let div = document.createElement('div')
    let li = document.createElement('li')    

    icon.setAttribute('class', 'material-symbols-outlined')
    icon.innerHTML = ' delete'
    
    button = document.createElement('button')
    button.setAttribute('class', 'botaodelete')
    button.appendChild(icon)
    button.addEventListener('click', deleteTask)

    div.setAttribute('class', 'divbotao')

    tasks.push(task.value)
    li.innerHTML += `${tarefa[0].toUpperCase() + tarefa.slice(1)}`

    div.appendChild(li)
    div.appendChild(button)
    lista.appendChild(div)
    task.value = ""
    task.focus()
}

function deleteTask() {
    this.parentElement.remove()
}   