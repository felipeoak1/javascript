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

function maxNumber(n, n1) {
     return n > n1 ? n : n1
}

console.log(maxNumber(23, 6))