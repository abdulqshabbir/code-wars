function p(args) {
    let result = []

    permuteRecursively(args, 0, "", result)

    return result
}

function permuteRecursively(args, start, temp, result) {
    if (start === args.length - 1) {
        temp += args[start]
        result.push(temp)
        return
    }

    for (let i = start; i < args.length; i++) {
        temp += args[start]
        permuteRecursively(args, start + 1, temp, result)
    }
}

console.log(p([1, 2, 3]))
