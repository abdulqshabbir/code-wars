function foundWord(charIdx, r, c, visited, board, word) {
    let lastIdx = word.length -1
    let ROWS = board.length
    let COLS = board[0].length
    
    if (
        r < 0 ||
        r >= ROWS ||
        c >= COLS ||
        c < 0 ||
        visited.has(r + "," + c) ||
        word[charIdx] !== board[r][c]
    )
    {
        return false
    }
    
    if (charIdx === lastIdx && board[r][c] === word[lastIdx]) {
        return true
    }

    visited.add(r + "," + c)
    
    let neighbors = [[r-1, c], [r+1, c], [r, c-1], [r, c+1]] 
    
    for (let [nRow, nCol] of neighbors) {
        if (foundWord(charIdx+1, nRow, nCol, visited, board, word)) {
            return true
        }
    }
    
    visited.delete(r + "," + c)
    
    return false
}

var exist = function(board, word) {
    let ROWS = board.length
    let COLS = board[0].length
    
    if (word.length === 0) return true
    
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            let visited = new Set()
            if (board[r][c] === word[0] && foundWord(0, r, c, visited, board, word)) {
                return true
            }
        }
    }
    return false
};