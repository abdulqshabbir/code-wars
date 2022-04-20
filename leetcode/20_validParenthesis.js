function isValid(s) {
    const stack = []
    stack.push(s[0])
    
    let idx = 1
    
    while (idx < s.length) {
        if (stack.length === 0) {
           stack.push(s[idx]) 
        } else if (isComplement(stack[stack.length -1], s[idx])) {
            stack.pop() 
        } else {
            stack.push(s[idx])
        }
        idx++
    }
    
    return stack.length === 0
};

function isComplement(left, right) {
    if (left === "(" && right === ")") return true
    
    if (left === "{" && right === "}") return true
    
    if (left === "[" && right === "]") return true
    
    return false
}