function mostFreq(counts) {
    let maxFreq = 0
    for (let [letter, count] of counts.entries()) {
        if (count > maxFreq) {
            maxFreq = count
        }
    }
    return maxFreq
}

var characterReplacement = function(s, k) {
    let l = 0
    let r = 0
    let result = 0
    let counts = new Map()
    counts.set(s[0], 1) 
    
    while (r < s.length) {
        const windowLen = r - l + 1
        const mostFreqOccurence = mostFreq(counts)
        
        if (windowLen - mostFreqOccurence <= k) {
            result = Math.max(result, windowLen)
            r++
            if (counts.has(s[r])) {
                counts.set(s[r], counts.get(s[r]) + 1)
            } else {
                counts.set(s[r], 1)
            }
        } else {
            counts.set(s[l], counts.get(s[l]) - 1)
            l++
        }
    }
    
    return result
};