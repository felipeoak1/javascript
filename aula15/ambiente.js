function factorial(n) {
    let res = 1
    for (var c = n; c > 0; c--){
        res = n * factorial(n-1)
    }
    return res
}

console.log(factorial(5))