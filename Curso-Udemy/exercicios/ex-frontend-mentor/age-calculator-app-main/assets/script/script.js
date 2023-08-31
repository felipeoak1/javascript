// Date variables
let date = new Date()
let currentYear = date.getFullYear()
let currentMonth = date.getMonth()

// Control variables
let yearChoosed;
let hrActive;
let control = true

// HTML Elements
let day = document.getElementById("iday")
let month = document.getElementById("imonth")
let year = document.getElementById("iyear")

let list = [day, month, year]

let button = document.getElementById("button")
let imgButton = document.getElementById("img-button")
button.addEventListener('click', checkInputs)

if (window.innerWidth > 375) {
    button.addEventListener("mouseenter", changeColor)
    button.addEventListener("mouseleave", mainColor)
} else {
    button.addEventListener("touchstart", mainColor)
}


function changeColor() {
    imgButton.style.backgroundColor = 'black'
    button.style.backgroundColor = 'black'
}


function mainColor() {
    imgButton.style.backgroundColor = 'hsl(259, 100%, 65%)'
    button.style.backgroundColor = 'hsl(259, 100%, 65%)'
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

function NumberInputs(element, text) {

    if (element.parentElement.childNodes.length == 5){
        let p = document.createElement('p')
        p.setAttribute('class', 'pcheckinput')
        element.parentElement.appendChild(p).innerHTML = text
    } else {
        element.parentElement.childNodes[5].innerHTML = text
    }

    element.style.border = 'solid 1px hsl(0, 100%, 67%)'
    document.getElementById(`i${element.name.toString().toLowerCase()}label`).style.color = 'hsl(0, 100%, 67%)'
    control = false
}


function checkNumberInputs(element, number) {

    if (element.name == "Year") {
        yearChoosed = Number(element.value)
    }

    if (element.name == "Day") {
        let dateteste = new Date(Number(year.value), Number(month.value), 0 )
        if (Number(element.value) > dateteste.getDate()) {
            NumberInputs(element, 'Invalid day')
        }
    }

    if (element.name == "Month" && yearChoosed == date.getFullYear()) {
        if (Number(element.value) > date.getMonth() + 1) {
            NumberInputs(element, `Must be in the past.`)
        }
    }

    if (Number(element.value) > number || Number(element.value) <= 0) {
        NumberInputs(element, `Must be a valid ${element.name}.`)
    }
}

function checkInputs() {

    checkNumberInputs(year, date.getFullYear())
    checkNumberInputs(day, 31)
    checkNumberInputs(month, 12)

    list.map(
        (e)=>{ 
            // Block user inputs
            e.setAttribute('disabled', 'desabilitado')

            // Checking if p element already exists, if not created it and set a wrong text for warning.
            if (e.value.length == 0) { 
                if (e.parentElement.childNodes.length == 5){
                    let p = document.createElement('p')
                    p.setAttribute('class', 'pcheckinput')
                    e.parentElement.appendChild(p).innerHTML = 'This field is required'
                } else {
                    e.parentElement.childNodes[5].innerHTML = 'This field is required'
                }

                // Changing border color.
                e.style.border = 'solid 1px hsl(0, 100%, 67%)'

                // Changing label color to red if the input value equal zero
                Array.from(document.getElementsByTagName("label")).map((e)=>{
                    let siblings = e.parentNode.childNodes
                    if (siblings[3].value == 0) {
                        e.style.color = 'hsl(0, 100%, 67%)'
                        }
                    })
                } else {
                    let count = 0
                    
                    for (c of e.parentElement.parentElement) {
                        if (c.value.length > 0){
                            count++
                        }

                        if (count == 3 && control) {
                            calcAge()
                        }

                    }
                }
            }
        )

    // Back all configurations to normal after one second and half
    setTimeout(() => {
        list.map((e)=>{
            e.removeAttribute('disabled')
            e.style.border = "solid 1px rgba(0, 0, 0, 0.253)"
            Array.from(document.getElementsByTagName('label')).map((e)=>{e.style.color = 'hsl(0, 1%, 44%)'})
            if (e.parentElement.childNodes.length == 6) {
                e.parentElement.childNodes[5].innerHTML = ' '
            }
            control = true
            })
    }, 1000);
}


function calcAge() {
    let yearText = document.getElementById("yeartext")
    let age = date.getFullYear() - Number(year.value)
    yearText.innerHTML = age

    calcMonths()
    calcDays()
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

