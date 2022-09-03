var canChange = function(start, target) {
    let s = start.replace(/_/g, "")
    let t = target.replace(/_/g, "")
    if (s !== t) return false
    
    let i =0
    let j = 0
    let n = start.length
    
    while (i < n && j < n) {
        while (target[i] === "_") {
            i++
        }
        while (target[i] !== start[j]) {
            j++
        }
        if (target[i] === "L") {
            if (j >= i) {
                i++
                j++
            } else return false
        } else if (target[i] === "R") {
            if (j <= i) {
                i++
                j++
            } else return false
        } 
    }
    
    while (i < n && target[i] === "_") i++
    while (j < n && start[j] === "_") j++
    
    return i === n && j === n
};