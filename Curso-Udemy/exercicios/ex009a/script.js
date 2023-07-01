let tasks = document.getElementById('itarefas')
let ul = document.getElementById('lista')
let add = document.getElementById('botaoAdicionar')
let taskList = []

add.addEventListener('click', addTask)

function addTask() {
    let li = document.createElement('li')
    let del = document.createElement('button')
    let div = document.createElement('div')
    del.setAttribute('class', 'botaodelete')
    div.setAttribute('class', 'divbotao')

    taskList.push(tasks.value)
    li.innerHTML = tasks.value
    div.appendChild(li)
    div.appendChild(del)
    ul.appendChild(div)
    
}
