var isValid = function(s) {
    const openingSymbols = new Set(["(", "{", "["])
    
    const closingToOpening = {
        ")": "(",
        "}": "{",
        "]": "["
    }
    
    const stack = []
    
    for (let char of s) {
        // if char is an opening bracket push onto the stack
        if (openingSymbols.has(char)) {
            stack.push(char)
        } else {
        // if char is a closing bracket check to see if it matches the "closest complementary opening bracket"
            if (closingToOpening[char] === stack[stack.length -1]) {
                stack.pop()
            } else {
                return false
            }
        }
    }
    
    return stack.length === 0
};