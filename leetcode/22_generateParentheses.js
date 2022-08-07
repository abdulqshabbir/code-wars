/**
 * @param {number} n
 * @return {string[]}
 */

var generateParenthesis = function(n) {
    const res = []
    
    function makeCombinations(open = 0, closed = 0, soFar ="") {
        if (open === n && closed === n) {
            res.push(soFar)
            return
        }
        
        if (open > closed && closed < n) {
            makeCombinations(open, closed + 1, soFar + ")")
        }
        
        if (open < n) {
            makeCombinations(open + 1, closed, soFar + "(")
        } 
    }
    
    makeCombinations()
        
    return res 
};