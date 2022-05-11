var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false
    let l = 0
    let r = 0
    let counts = generateMap(s1) 
    while (r < s2.length) {
        if (checkPermutation(counts)) {
            return true
        }
        if (!(s2[r] in counts)) {
            r++
            l = r
            counts = generateMap(s1)
            continue
        }
        if (counts[s2[r]] > 0) {
            counts[s2[r]] = counts[s2[r]] - 1
            r++
        }
        else {
            counts[s2[r]] = counts[s2[r]] - 1
            while (counts[s2[r]] < 0) {
                counts[s2[l]] = counts[s2[l]] + 1
                l++
            }
            r++
        }
    }
    
    return checkPermutation(counts)
};

function checkPermutation(counts) {
    for (let [letter, count] of Object.entries(counts)) {
        if (count !== 0) return false 
    }
    
    return true
}

function generateMap(str) {
    let map = {}
    
    for (let char of str) {
        if (char in map) {
            map[char]++
        } else {
            map[char] = 1
        }
    }
    
    return map
}