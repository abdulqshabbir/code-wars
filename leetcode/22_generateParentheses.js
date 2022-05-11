var generateParenthesis = function(n) {
    const permutations = []
    let initialChars = ""
    for (let i = 0; i < n; i++) {
        initialChars += "(" + ")"
    }
    generatePerms("", initialChars, permutations)  
    
    console.log(permutations)
    
    const result = []
    return result
};

function generatePerms(soFar, rest, permutations) {
    if (rest === "") {
        permutations.push(soFar)
    }
    else {
        for (let i = 0; i < rest.length; i++) {
            let newSoFar = soFar + rest[i]
            let remaining = rest.substring(0, i) + rest.substring(i+1)
            generatePerms(newSoFar, remaining, permutations)
        }
    }
}