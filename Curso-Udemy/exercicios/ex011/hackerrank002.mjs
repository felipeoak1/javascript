import { string_test as s, querie_test as q } from "./hackerrank002str.mjs"

/* There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an queries of the results. */
let que = q.split("\n")
let str = s.split("\n")


function matchingStrings(strings, queries) {
    let list = []
    let count = 0

    for (let c of queries) {
        for (let j of strings){
            if (c == j) {
                count ++
            }
        }
        list.push(count)
        count = 0
    }

    return list
}


console.log(matchingStrings(str, que ))



// ['aba', 'baba', 'aba', 'xzxb'], ['aba', 'xzxb', 'ab']
