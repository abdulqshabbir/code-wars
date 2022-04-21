function isPalindrome(s) {
    s = s.toLowerCase()
    let nonAlhpaNumeric = /[^a-z0-9]/g
    s = s.replace(nonAlhpaNumeric, "")
    
    let l = 0
    let r = s.length - 1
    
    while (l <= r) {
        if (s[l] !== s[r]) {
            return false 
        }
        l++
        r--
    }
    
    return true
};