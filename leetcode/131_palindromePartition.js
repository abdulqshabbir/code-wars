var partition = function(s) {
    let res = []
    let part = []
    
    dfs(0)
    
    function isPalindrome(l, r) {
        while (l < r) {
            if (s[l] !== s[r]) return false 
            l++
            r--
        }
        return true
    }
    
    function dfs(i) {
        if (i === s.length) {
            res.push(part.slice())
            return
        }
        
        for (let j = i; j < s.length; j++) {
            if (isPalindrome(i, j)) {
                part.push(s.slice(i, j + 1))
                dfs(j + 1)
                part.pop()
            }
        }
    }
    return res
};