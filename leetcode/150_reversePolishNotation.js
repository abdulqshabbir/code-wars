var evalRPN = function(tokens) {
    let s = []
    for (let token of tokens) {
        if (token === "+") {
            let a = s.pop()
            let b = s.pop()
            s.push(a + b)
        } else if (token === "*") {
            let a = s.pop()
            let b = s.pop()
            s.push(a*b)
        } else if (token === "-") {
            let a = s.pop()
            let b = s.pop()
            s.push(b-a)
        } else if (token === "/") {
            let a = s.pop()
            let b = s.pop()
            if (b/a >= 0) {
                s.push(Math.floor(b/a)) 
            } else {
                s.push(Math.ceil(b/a))
            }
        } else {
            s.push(Number(token))
        }
    }
    return s[0]
};

evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"])
