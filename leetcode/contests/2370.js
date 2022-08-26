function charDiff(charA, charB) {
    return Math.abs(charA.charCodeAt() - charB.charCodeAt())
}
var longestIdealString = function(s, k) {
    let i = 0
    let start = 0
    let longest = 0
    
    let visited = new Set()
    let arr = []

    while (start < s.length) {
        if (visited.has(i)) {
            i++
        }

        else if (i === s.length) {
            arr = []
            while (visited.has(start)) {
                start++
            }
            i = start
        }
        
        else if (arr.length === 0 || charDiff(s[i], arr[arr.length-1]) <= k) {
            arr.push(s[i])
            visited.add(i)
            longest = Math.max(longest, arr.length)
            i++
        }

        else {
           i++ 
        }
    }

    return longest
};

console.log(longestIdealString("eduktdb", 15))