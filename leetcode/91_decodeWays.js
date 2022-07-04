function isValidDigit(char) {
    return parseInt(char) > 0 && parseInt(char) <= 9
}

function isValidPair(strPair) {
    return parseInt(strPair) > 0 && parseInt(strPair) <= 26 && strPair[0] !== "0"
}

var numDecodings = function(s) {
    let table = new Array(s.length).fill(0)
    
    table[s.length -1] = 1
    table.push(1)
    
    for (let i = table.length - 3; i >= 0; i--) {
        if (isValidDigit(s[i])) {
            table[i] += table[i+1]     
        }
        if (isValidPair(s.slice(i, i + 2))) {
            table[i] += table[i+2]
        }
    } 
    
    return table[0]
};