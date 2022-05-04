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