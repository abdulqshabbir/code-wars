/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    countS = new Map()
    countT = new Map()
    
    if (s.length !== t.length) return false
    
    createCharMap(s, countS)
    createCharMap(t, countT)
    
    return areCountsSame(countS, countT)
};

function areCountsSame(countS, countT) {    
    for (let [key, val] of countS) {
        console.log(key, val)
        if (!countT.has(key)) {
            return false
        }
        if (countT.get(key) !== val) {
            return false
        }
    }
    return true
}
    
function createCharMap(s, m) {
    for (let char of s) {
        if (!m.has(char)) {
            m.set(char, 1)
        } else {
            m.set(char, m.get(char) + 1)
        }
    }
    return m
}