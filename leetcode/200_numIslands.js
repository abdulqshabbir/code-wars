var numIslands = function(grid) {
    let numIslands = 0
    let visited = new Set()
    
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (explore(r, c, grid, visited)) {
                numIslands++
            }
        }
    }
    
    return numIslands
};

function explore(r, c, grid, visited) {
    const rowValid = r >= 0 && r < grid.length
    const colValid = c >=0 && c < grid[0].length
    
    if (!rowValid || !colValid) return false
    
    if (grid[r][c] === "0") return false
    
    if (visited.has(r + "," + c)) return false
    
    let position = r + "," + c
    visited.add(position)
    let neighbours = [[r-1, c], [r+1, c], [r, c-1], [r, c+1]]
    
    for (let [nRow, nCol] of neighbours) {
        explore(nRow, nCol, grid, visited)
    }
    
    return true
}