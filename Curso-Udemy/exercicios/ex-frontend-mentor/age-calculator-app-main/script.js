let date = new Date()
let currentYear = date.getFullYear()

let day = document.getElementById("iday")
let month = document.getElementById("imonth")
let year = document.getElementById("iyear")
let button = document.getElementById("button")
button.addEventListener('click', calcAge)

function calcAge() {
    let yearText = document.getElementById("yeartext")
    let age = currentYear - Number(year.value)
    yearText.innerHTML = age
}

