var decodeMessage = function(key, message) {
    let map = {} 
    let current = 'a'
    
    for (let letter of key) {
        if (letter in map) {
            continue
        }
        else {
            if (letter === " ") continue
            map[letter] = current
            current = String.fromCharCode(current.charCodeAt() + 1)
            console.log('new current val', current)
        }
    }
    
    let res = []
    
    for (let letter of message) {
        if (letter === " ") res.push(" ")
        else {
            res.push(map[letter])
        }
    }
    
    return res.join("")
};