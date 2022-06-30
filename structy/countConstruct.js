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

function countConstruct(target, wordBank) {
    if (target === "") return 1

    let numberOfWays = 0

    for (let prefix of wordBank) {
        if(isPrefix(prefix, target)) {
            const suffix = target.slice(prefix.length)
            if (countConstruct(suffix, wordBank) === 1) {
                numberOfWays++
            }
        }
    }
    return numberOfWays
}

function countConstructTabulated(target, wordBank) {
    let table = new Array(target.length + 1).fill(0)
    table[0] = 1

    for (let i = 0; i <= target.length; i++) {
        if (table[i] > 0) {
            for (let prefix of wordBank) {
                if (target.slice(i).indexOf(prefix) === 0) {
                    let inBounds = i + prefix.length <= target.length
                    if (inBounds) table[i + prefix.length] += table[i]
                }
            }
        }
    }

    return table[target.length]
}


console.log(countConstructTabulated("hello", ["hel", "lo", "h", "ello"])) // 2
console.log(countConstructTabulated("", ["hel", "lo", "h", "ello"])) // 1
console.log(countConstructTabulated("hello", ["hep", "lo", "h", "pllo"])) // 0
