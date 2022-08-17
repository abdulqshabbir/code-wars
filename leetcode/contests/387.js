/*
    for each char in s:
        map char to 0-indexed number
        calculate frequency in an array of size s.length
    
    for each char in s:
        convert s into 0-indexed number
        if array[key] > 0
            return char
    
*/

var firstUniqChar = function(s) {
    let freq = new Array(26).fill(0) // map 0-indexed num representation of each char to its frequency

    for (let char of s) {
        const key = char.charCodeAt() - 'a'.charCodeAt()
        freq[key] += 1
    }
    
    console.log('freq array', freq)

    for (let i = 0; i < s.length; i++) {
        const key = s[i].charCodeAt() - 'a'.charCodeAt()
        if (freq[key] === 1) {
            return i
        } 
    }

    return -1
};