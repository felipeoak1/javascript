/* Write a JavaScript function to check whether a string is blank or not. */

function is_Blank(n) {
    return n.length == 0 ? true:false
}

console.log(is_Blank('abc'));

/* Write a JavaScript function to split a string and convert it into an array of words. */

function stringToArray(n) {
    return n.split(' ')
}

console.log(stringToArray("Robin Singh"));

/* Write a JavaScript function to extract a specified number of characters from a string. */

function truncatString(m,i=0, f) {
    return m.slice(i, f)
}

console.log(truncatString("Robin Singh",0,4));

//  Write a JavaScript function to convert a string into abbreviated form.

function abbrevName(n) {
   return `${n.slice(0, n.indexOf(' ') + 2)}.`
}

console.log(abbrevName('Robin Singh'))

//  Write a JavaScript function that hides email addresses to prevent unauthorized access.


function protectEmail(n) {
    const elements = ['@']
    for (c of elements) {
        if (n.indexOf(c) >= -1) {
            let slicedEmail = `${n.slice(0, 5)}...${n.slice(n.indexOf(c), n.length)}`
            console.log(slicedEmail)
        }
    }
}

protectEmail('robin_singh@example.com')

// Write a function what receive 2 numbers and return bigger

let maxNumber = (n, n1) => n > n1 ? n : n1

console.log(maxNumber(23, 6))

// Write a JavaScript program to get the website URL (loading page). 

console.log(document.URL())

// Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference. 

function numberDifference(n) {
    return n > 13 ? (n - 13) * 2 : 13 - n
}


console.log(numberDifference(3))

// Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.  

function sumNumbers(n1=0, n2=0) {
    return n1 === n2 ? (n1 + n2) * 3 : n1 + n2
}

console.log(sumNumbers(1,2))

// Write a JavaScript program to find the largest of three given integers.  

function largestNumber(...num) {
    return Math.max(...num)
}

console.log(largestNumber(1, 4, 66))

// Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given string. If the string length is less than 3 convert all the characters to upper case.  

function editString(str) {
    return str.length <= 3 ? str.toUpperCase() : `${str.slice(0, 4).toLowerCase()}${str.slice(4, str.length)}`
}

console.log(editString('Tes'))