/*
    0  1  2

0    5  7  0
1    0  3  1
2    0  5  0

    0  1  2   3

0    5  7  0  0
1    0  3  1  1
2    0  5  0  0
3    0  5  0  0

for each row in m
    for each col in row
        check if up diagonal cell is zero
            return false
        check if down diagonal cell is zero
            return false
        check if non-diagonal cell is non-zero
            return false

return true
*/

var checkXMatrix = function(grid) {
    const ROWS = grid.length; //4
    const COLS = grid[0].length // 4

    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            // up diagonal
            if (r + c === ROWS - 1) {
                if (grid[r][c] === 0) {
                    return false 
                }
            } 
            // down diagonal
            else if (r === c) {
                if (grid[r][c] === 0) {
                    return false 
                }
            }

            // non-diagonal
            else {
                if (grid[r][c] !== 0) return false
            }
        }
    }

    return true
};