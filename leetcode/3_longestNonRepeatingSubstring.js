/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let map = new Map()
    let len = 0
    let maxLen = 0
    
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            let repeatIdx = map.get(s[i])
            map.clear()
            len = 0
            for (let j = repeatIdx + 1; j <= i; j++) {
                map.set(s[j], j)
                len++
            }
            maxLen = Math.max(len, maxLen)
        } else {
            map.set(s[i], i)
            len++
            maxLen = Math.max(len, maxLen) 
        }  
    }
    return maxLen
};

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let set = new Set()
    let l = 0
    let maxLen = 0
    let len = 0
    for (let r = 0; r < s.length; r++) {
        if(!set.has(s[r])) {
            len++
            set.add(s[r])  
        } else {
            // set has s[r]
           while (set.has(s[r])) {
               set.delete(s[l])
               l++
           }
           set.add(s[r])
           len = r - l + 1
        }
        if (len > maxLen) maxLen = len
    }
    return maxLen
};