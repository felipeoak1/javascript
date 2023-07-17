let date = new Date()
let currentYear = date.getFullYear()
let currentMonth = date.getMonth()
let currentDay = date.getDate()
let hrActive;

let day = document.getElementById("iday")
let month = document.getElementById("imonth")
let year = document.getElementById("iyear")

let button = document.getElementById("button")
let imgButton = document.getElementById("img-button")
button.addEventListener('click', checkInputs)
button.addEventListener("mouseenter", changeColor)
button.addEventListener("mouseleave", colorButton)

function colorButton() {
    imgButton.style.backgroundColor = 'hsl(259, 100%, 65%)'
    button.style.backgroundColor = 'hsl(259, 100%, 65%)'
}

function changeColor() {
    imgButton.style.backgroundColor = 'black'
    button.style.backgroundColor = 'black'
}

function checkWidth() {

    if (window.innerWidth > 375) {
        let hr = document.getElementById("hr2")
        hr.style.display = 'none'
        hrActive = false
    } else {
        if (!hrActive) {
            let hr = document.getElementById("hr2")
            hr.style.display = 'inline-block'
            hrActive = true
        }
    }
}

function calcAge() {
    let yearText = document.getElementById("yeartext")
    let age = currentYear - Number(year.value)
    yearText.innerHTML = age

    calcMonths()
    calcDays()
}

function checkInputs() {
    let list = [day, month, year]

    list.map(
        (e)=>{ 
            if (e.value.length == 0) { 
                if (e.parentElement.childNodes.length == 5){
                    let p = document.createElement('p')
                    p.setAttribute('class', 'pcheckinput')
                    e.parentElement.appendChild(p).innerHTML = 'This field is required'
                } else {
                    e.parentElement.childNodes[5].innerHTML = 'This field is required'
                }

                e.style.border = 'solid 1px hsl(0, 100%, 67%)'
                Array.from(document.getElementsByTagName("label")).map((e)=>{
                    let siblings = e.parentNode.childNodes
                    if (siblings[3].value == 0) {
                        e.style.color = 'hsl(0, 100%, 67%)'
                        }
                    })
                } else {
                    for (c of e.parentElement.parentElement) {
                        console.log(c)
                    }
                }
            }
        )

    setTimeout((e) => {
        list.map((e)=>{
            if (e.value.length == 0) {
                e.parentElement.childNodes[5].innerHTML = ' '
                e.style.border = "solid 1px rgba(0, 0, 0, 0.253)"
                Array.from(document.getElementsByTagName('label')).map((e)=>{e.style.color = 'hsl(0, 1%, 44%)'})
            }})
    }, 1500);
}

function calcMonths() {
    let monthAge;
    let monthText = document.getElementById("monthtext")
    
    if (month.value > currentMonth + 1) {
        monthAge = Number(month.value) - (currentMonth + 1)
    } else {
        monthAge = (currentMonth + 1 ) - Number(month.value)
    }

    monthText.innerHTML = `${monthAge.toString().padStart(2, '0')}`
}

function calcDays() {
    let dayText = document.getElementById("daytext")
    let dayNow = new Date().getDate()

    dayText.innerHTML = `${dayNow.toString().padStart(2, '0')}`
}