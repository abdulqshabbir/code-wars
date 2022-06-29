function isPrefix(prefix, word) {
    if (prefix.length > word.length) return false

    let i = 0
    for (let letter of prefix) {
        if (letter !== word[i]) {
            return false
        }
        i++
    }

    return true
}

function canConstruct(word, dictionary) {
    if (word === "") return true

    for (let prefix of dictionary) {
        if(isPrefix(prefix, word)) {
            const slicedWord = word.slice(prefix.length)
            if (canConstruct(slicedWord, dictionary)) {
                return true
            }
        }
    }
    return false
}

function canConstructTabulated(target, dictionary) {
    let table = new Array(target.length + 1).fill(false)

    table[0] = true

    for (let i = 0; i < target.length + 1; i++) {
        if (table[i] === true) {
            for (let prefix of dictionary) {
                if (target.slice(i).indexOf(prefix) === 0) {
                    const inBounds = i + prefix.length <= target.length
                    if (inBounds) table[i + prefix.length] = true
                }
            }
        }
    }

    return table[target.length]
}

console.log(canConstructTabulated("", ["a", "ab", "d", "ef", "d"])) // true
console.log(canConstructTabulated("abcdef", ["a", "ab", "d", "ef", "d"])) // false
console.log(canConstructTabulated("abcdef", ["a", "abc", "d", "ef", "d"])) // true