/*
    This naive solution runs in O(n * klog(k)) time
    where n is the length of strs and k is the length of
    the average word in strs

    This is because sorting each word to create a unique
    has for each anagram will take klog(k) time and we need
    to do this for each str in strs
*/
 var groupAnagrams = function(strs) {
    let anagramToIndex = {}
    let result = []
    let k = 0
    
    for (let i = 0; i < strs.length; i++) {
        let sortedStr = strs[i].split("").sort((a, b) => a.localeCompare(b)).join("")
        if (anagramToIndex.hasOwnProperty(sortedStr)) {
            let idx = anagramToIndex[sortedStr]
            result[idx].push(strs[i])
        } else {
            anagramToIndex[sortedStr] = k
            result[k] = []
            result[k].push(strs[i])
            k++
        }
    }
    
    return result
};

/*
    This optimal solution runs in O(n * k) time
    where n is the length of strs and k is the length of
    the average word in strs

    This is because for each word in strs we iterate
    over each char in word which takes O(nk) time and then
    we create a unique key using the count array by stringifying it.
    Since the count array will have a maximum of 26 characters
    stringifying count will take O(26) time which is O(1)

*/

var groupAnagrams = function(strs) {
    let result = []
    let countsToAnagrams = new Map()
    
    // O(n) for outer for loop
    for (let word of strs) {
        let count = new Array(26).fill(0)
        // O(k) for inner loop
        for (let char of word) {
            let idx = char.charCodeAt() - "a".charCodeAt()
            count[idx] += 1
        }
        // O(26) for stringifying
        count = JSON.stringify(count)
        if (countsToAnagrams.has(count)) {
            let anagrams = countsToAnagrams.get(count)
            anagrams.push(word)
        } else {
            countsToAnagrams.set(count, [ word ])
        }
    }
    
    // O(n) for indexing into each key in the map
    for (let value of countsToAnagrams.values()) {
        result.push(value)
    }
    
    return result
};

groupAnagrams(["eat","tea","tan","ate","nat","bat"])