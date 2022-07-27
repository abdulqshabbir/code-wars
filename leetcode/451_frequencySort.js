/**
 * @param {string} s
 * @return {string}
 */

var frequencySort = function(s) {
    const letterCounts = {}
    
    // O(n)
    for (let letter of s) {
        letterCounts[letter] = letter in letterCounts ? letterCounts[letter] + 1 : 1
    }
    
    const buckets = new Array(s.length + 1).fill(null).map(e => new Array(0))
    
    // O(n)
    for (let letter in letterCounts) {
        const freq = letterCounts[letter]
        for (let i = 0; i < freq; i++) {
            buckets[freq].push(letter)
        }
    }
    
    const res = []
    
    // O(n)
    for (let i = buckets.length -1; i >= 0; i--) {
        res.push(...buckets[i])
    }
    
    return res.join("")
};