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

