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

function validChar(char) {
    return parseInt(char) < 10
}

function validPair(pair) {
    return parseInt(pair) >= 10 && parseInt(pair) <= 26
}

var numDecodings = function(s) {
    function numWaysRecurse(i, memo) {
        if (memo.has(i)) return memo.get(i) 
        
        if (s[i] === "0") return 0
        
        let ways = 0
        
        if (i+1 <= s.length && validChar(s[i])) {
            ways += numWaysRecurse(i+1, memo)
        }
        if (i+2 <= s.length && validPair(s[i] + s[i+1])) {
            ways += numWaysRecurse(i+2, memo)
        }
        
        memo.set(i, ways)
        
        return ways
    } 
    
    let memo = new Map()
    memo.set(s.length, 1)
    
    return numWaysRecurse(0, memo)
};