let tasks = document.getElementById('itarefas')
let ul = document.getElementById('lista')
let add = document.getElementById('botaoAdicionar')

add.addEventListener('click', addTask)

function addTask() {
    let li = document.createElement('li')
    let del = document.createElement('button')
    let div = document.createElement('div')
    let span = document.createElement('span')

    del.setAttribute('class', 'botaodelete')
    div.setAttribute('class', 'divbotao')
    span.setAttribute('class', 'material-symbols-outlined')
    del.addEventListener('click', deleteTask)

    span.innerHTML = 'delete'
    li.innerHTML = tasks.value

    del.appendChild(span)
    div.appendChild(li)
    div.appendChild(del)
    ul.appendChild(div)
    
}

function deleteTask() {
    this.parentElement.remove()
}