var repeatedCharacter = function(s) {
    let map = new Map()

    for (let char of s) {
        if (!map.has(char)) map.set(char, true)
        
        else return char
    }
};