var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    
    const count = {}
    
    for (let letter of s) {
        if (!(letter in count)) count[letter] = 0
        count[letter]++
    }
    
    for (let letter of t) {
        if (!(letter in count) || count[letter] === 0) return false
        
        count[letter] = count[letter] - 1
    }
    
    return true
};