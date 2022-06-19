var orangesRotting = function(grid) {
    const rotten = new Set()
    let total = 0
    let fresh = 0
    const ROWS = grid.length
    const COLS = grid[0].length
    
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            let pos = r + "," + c
            if (grid[r][c] === 1) fresh++
            if (grid[r][c] === 2) rotten.add(pos) 
            if (grid[r][c] === 1 || grid[r][c] === 2) total++
        }
    }
    
    if (fresh === 0) return 0
    
    return exploreTime(grid, rotten, fresh, total)
};


function exploreTime(grid, rotten, fresh, total) {
    let time = -1
    let q = []
    
    for (let orange of rotten) {
        q.push(orange)
    }
    
    while (q.length > 0 && fresh > 0) {
        let qLength = q.length
        
        for (let i = 0; i < qLength; i++) {
            let current = q.shift()
            const [r, c] = current.split(",").map(Number)
            
            if (grid[r][c] === 1) {
                fresh--
                grid[r][c] = 2
            }
            const neighbors = getNeighbors(r, c, grid) 
            for (let n of neighbors) {
                q.push(n)
            }
        }
        time++
    }
    
    let numRottenOranges = 0
    
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (grid[r][c] === 2) {
                numRottenOranges++
            }
        }
    }
        
    return numRottenOranges === total ? time : -1
}
function getNeighbors(r, c, grid) {
    let res = [
        [r+1, c],
        [r-1, c],
        [r, c-1],
        [r, c+1],
    ]
    
    const isValidRowCol = ([r, c]) => r >= 0 && r < grid.length && c >=0 && c < grid[0].length
    const isFresh = ([r, c]) => grid[r][c] === 1
    
    return res
            .filter(n => isValidRowCol(n) && isFresh(n))
            .map(([r, c]) => r + "," + c)
}
orangesRotting([[2,2],[1,1],[0,0],[2,0]])