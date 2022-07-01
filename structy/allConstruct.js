function isPrefix(prefix, word) {
    return word.indexOf(prefix) === 0
}

function allConstruct(target, wordBank) {
    if (target === "") return [[]]

    let combinations = []

    for (let prefix of wordBank) {
        if (isPrefix(prefix, target)) {
            let suffix = target.slice(prefix.length)
            let waysToMakeSuffix = allConstruct(suffix, wordBank) // [[ple, le], [le]]
            combinations.push(...waysToMakeSuffix.map(way => [prefix, ...way]))
        }
    }

    return combinations
}

function allConstructTabulated(target, wordBank) {
    const table = new Array(target.length + 1)

    
}

console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']))
console.log(allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']))
console.log(allConstruct('aaaaaaaaaaaaaaaaaaaaaaaaaz', ['a', 'aa', 'aaa', 'aaaa', 'aaaaa']))