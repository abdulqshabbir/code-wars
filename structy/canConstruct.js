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

console.log(canConstruct("abcdef", ["a", "ab", "d", "ef", "d"]))