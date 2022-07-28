/**
 * @param {character[][]} board
 * @return {boolean}

    time complexity: O(n) where n is number of cells in board
    space complexity: O(n) where n is number of cells in board
*/

var isValidSudoku = function(board) {
    const rows = new Map()
    const cols = new Map()
    const boxes = new Map()
    
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            if (!rows.has(r)) rows.set(r, new Set())
            if (!cols.has(c)) cols.set(c, new Set())
            
            const key = Math.floor(r/3) + "," + Math.floor(c/3)
            if (!boxes.has(key)) boxes.set(key, new Set())
        }
    }
    
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            const val = board[r][c]
            if (val === ".") continue
            
            const key = Math.floor(r/3) + "," + Math.floor(c/3)
            if (rows.get(r).has(val)) return false
            if (cols.get(c).has(val)) return false
            if (boxes.get(key).has(val)) return false
            
            rows.get(r).add(val) 
            cols.get(c).add(val) 
            boxes.get(key).add(val) 
        }
    }
    
    return true
};