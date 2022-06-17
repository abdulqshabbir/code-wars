/**
 * @param {number[][]} grid
 * @return {number}
 */
 var maxAreaOfIsland = function(grid) {
    let maxArea = 0
    const visited = new Set()
    const ROWS = grid.length
    const COLS = grid[0].length
    
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            let area = exploreArea(r, c, grid, visited)
            if (area > 0 && area > maxArea) maxArea = area
        }
    }
    
    return maxArea
};

function exploreArea(r, c, grid, visited) {
    const rowOutOfBounds = r < 0 || r > grid.length - 1
    const colOutOfBounds = c < 0 || c > grid[0].length -1
    
    if (rowOutOfBounds || colOutOfBounds) return 0
    
    let pos = r + "," + c
    if (visited.has(pos)) return 0
    visited.add(pos) 
    
    if (grid[r][c] === 0) return 0
    
    let neighbors = [[r-1, c], [r+1, c], [r, c-1], [r, c+1]]
    
    let size = 1
    
    for (let [r, c] of neighbors) {
        size += exploreArea(r, c, grid, visited)
    }
    
    return size
}