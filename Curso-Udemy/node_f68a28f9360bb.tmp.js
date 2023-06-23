// SetTimeout e SetInterval
let c = 0

while (c == 0) {
    console.log(c)
}

setTimeout( function () {
    console.log('Opa, no meio da iteração')
}, 5000 )
