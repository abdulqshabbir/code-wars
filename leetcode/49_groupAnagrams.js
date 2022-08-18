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
    const res = []
    const map = {}
    
    for (let word of strs) {
        let key = createFrequencyKey(word)
        if (!(key in map)) map[key] = []
        map[key].push(word) 
    }
    
    for (let key in map) {
        res.push(map[key])
    }
    
    return res
};

function createFrequencyKey(word) {
    let freq = new Array(26).fill(0)
    
    for (let char of word) {
        let key = char.charCodeAt() - 'a'.charCodeAt()
        freq[key]++
    }
    
    const arr = []
    for (let [idx, frequency] of freq.entries()) {
         let letter = String.fromCharCode(idx + 'a'.charCodeAt())
         arr.push(letter + "," + frequency)
    }
    
    return arr.join("")
}

groupAnagrams(["eat","tea","tan","ate","nat","bat"])