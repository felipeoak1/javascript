/* Given an array of integers, where all elements but one occur twice, find the unique element. */

function lonelyinteger(a) {
    let count = 0

    for (let c of a){
        for (let j of a) {
            if (c == j) {
               count++
            }
        }

        if (count == 1) {
            return `${c}`
        }
        
        count = 0
        
    }
    
}

lonelyinteger(['a', 'a', 'a', 'b', 'c', 'e', 'b', 'c', 'e'])