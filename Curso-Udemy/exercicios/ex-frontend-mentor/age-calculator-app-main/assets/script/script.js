let date = new Date()
let currentYear = date.getFullYear()
let currentMonth = date.getMonth()
let currentDay = date.getDate()
let hrActive;

let day = document.getElementById("iday")
let month = document.getElementById("imonth")
let year = document.getElementById("iyear")
let button = document.getElementById("button")
button.addEventListener('click', calcAge)


function calcAge() {
    let yearText = document.getElementById("yeartext")
    let age = currentYear - Number(year.value)
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