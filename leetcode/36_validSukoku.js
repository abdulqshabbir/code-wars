/**
 * @param {character[][]} board
 * @return {boolean}

    time complexity: O(n) where n is number of cells in board
    space complexity: O(n) where n is number of cells in board
 
 */
var isValidSudoku = function(board) {
    for (let row = 0; row < board.length; row++) {
        let rowValues = new Array(10).fill(false)
        for (let col = 0; col < board[0].length; col++) {
            let sudokuNumber = parseInt(board[row][col])
            if (isNaN(sudokuNumber)) {
                continue
            }
            if (rowValues[sudokuNumber]) {
                return false
            }
            rowValues[sudokuNumber] = true
        }
    }
    
    for (let col = 0; col < board[0].length; col++) {
        let colValues = new Array(10).fill(false)
        for (let row = 0; row < board.length; row++) {
            let sudokuNumber = parseInt(board[row][col]) 
            if (isNaN(sudokuNumber)) {
                continue
            }
            if (colValues[sudokuNumber]) {
                return false
            }
            colValues[sudokuNumber] = true
        }
    }
    
    let startPositions = [[0, 0], [0, 3], [0, 6], [3, 0], [3, 3], [3, 6], [6, 0], [6, 3], [6, 6]]
    
    for (let [startRow, startCol] of startPositions) {
        let subBoxValues = new Array(10).fill(false)
        for (let row = startRow; row < startRow + 3; row++) {
            for (let col = startCol; col < startCol + 3; col++) {
                let val = parseInt(board[row][col])
                if (isNaN(val)) {
                    continue
                }
                if (subBoxValues[val]) {
                    return false
                }
                subBoxValues[val] = true
            } 
        } 
    }
    return true
};

// Second solution uisng javascript maps and sets

var isValidSudoku = function(board) {
    let rowsToValues = new Map()
    let colsToValues = new Map()
    let boxToValues = new Map()
    
    for (let i = 0; i <= 8; i++) {
        rowsToValues.set(i, new Set())
        colsToValues.set(i, new Set())
        for (let j = 0; j <= 8; j++) {
            let boxRow = Math.floor(i/3)
            let boxCol = Math.floor(j/3)
            if (boxToValues.has(JSON.stringify([boxRow, boxCol]))) {
                continue
            } else {
                boxToValues.set(JSON.stringify([boxRow, boxCol]), new Set())
            }
        }
    }
    
    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[0].length; c++) {
            if (board[r][c] === ".") {
                continue
            }
            let rowValues = rowsToValues.get(r)
            let colValues = colsToValues.get(c)
            let boxValues = boxToValues.get(JSON.stringify([Math.floor(r/3), Math.floor(c/3)]))
            let val = board[r][c]
            
            if (rowValues.has(val) || colValues.has(val) || boxValues.has(val)) return false
            
            rowValues.add(val) 
            colValues.add(val) 
            boxValues.add(val)
        }
    }
    
    return true
};