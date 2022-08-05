/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false
    
    let s1Map = createFreqMap(s1, s1.length)
    let s2Map = createFreqMap(s2, s1.length)
    
    let l = 0
    let r = s1.length - 1
    
    while (r < s2.length) {
        if (isPerm(s1Map, s2Map)) return true
        
        s2Map[s2[l]]--
        l++ 
        
        if (r + 1 < s2.length) {
            if (!(s2Map[s2[r+1]])) s2Map[s2[r+1]] = 0
            s2Map[s2[r+1]]++
        }
        r++ 
    }
    
    return false
};

function isPerm(map1, map2) {
    for (let char1 in map1) {
        if (!(char1 in map2)) return false
        if (map1[char1] !== map2[char1]) return false
    }
    
    return true
}

function createFreqMap(str, len) {
     let freqMap = {}
     
     for (let i = 0; i < len; i++) {
         if (!(str[i] in freqMap)) freqMap[str[i]] = 0
         
         freqMap[str[i]]++
     }
    
    return freqMap
}