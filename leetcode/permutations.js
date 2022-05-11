function permute(rest, result, soFar = "") {
    if (rest === "") {
        result.push(soFar)
    } else {
        for (let i = 0; i < rest.length; i++) {
            let newSoFar = soFar + rest[i]
            let remaining = rest.substring(0, i) + rest.substring(i + 1)
            permute(remaining, result, newSoFar)
        }
    }
    return result
}

let res = []
permute("ABC", res)
console.log(res)