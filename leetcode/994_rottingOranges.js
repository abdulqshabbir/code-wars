var orangesRotting = function(grid) {
    const rotten = new Set()
    const fresh = new Set()
    let total = 0
    const ROWS = grid.length
    const COLS = grid[0].length
    
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            let pos = r + "," + c
            if (grid[r][c] === 2) rotten.add(pos) 
            if (grid[r][c] === 1) fresh.add(pos)
            if (grid[r][c] === 1 || grid[r][c] === 2) total++
        }
    }
    
    if (rotten.size === 0) return -1
    
    let visited = new Set()
    
    for (let pos of rotten) {
        let [r, c] = pos.split(",").map(Number)
        dfs(r, c)
    }
    
    if (visited.size !== total) return -1
    
    function dfs(r, c) {
        let isValidRow = r >=0 && r < grid.length
        let isValidCol = c >=0 && c < grid[0].length
        
        if (!isValidRow || !isValidCol) return
        
        if (grid[r][c] === 0) return
        
        if (visited.has(r + "," + c)) return
        
        const pos = r + "," + c
        visited.add(pos)
        
        dfs(r-1, c)     
        dfs(r+1, c)     
        dfs(r, c-1)     
        dfs(r, c+1)     
    }
    
    visited = new Set()
    
    return exploreTime(grid, visited, rotten, total)
};


function exploreTime(grid, visited, rotten, total) {
    let time = 0
    let q = []
    
    for (let orange of rotten) {
        q.push(orange)
    }
    
    while (q.length > 0) {
        let qLength = q.length
        
        if (total === visited.size) return time
        
        for (let i = 0; i < qLength; i++) {
            let current = q.shift()
            visited.add(current)
            const [r, c] = current.split(",").map(Number)
            const neighbors = getNeighbors(r, c, grid, visited) 
            
            for (let n of neighbors) {
                q.push(n)
            }
        }
        
        time++
    }
        
    return time
}
function getNeighbors(r, c, grid, visited) {
    let res = [
        [r+1, c],
        [r-1, c],
        [r, c-1],
        [r, c+1],
    ]
    
    const isValidRowCol = ([r, c]) => r >= 0 && r < grid.length && c >=0 && c < grid[0].length
    const isNotVisited = ([r, c]) => !visited.has(r + "," + c)
    const isOrange = ([r, c]) => grid[r][c] !== undefined && grid[r][c] !== 0
    
    return res
        .filter(n => isValidRowCol(n) && isNotVisited(n) && isOrange(n))
        .map(([r, c]) => r + "," + c)
}

orangesRotting([[2,1,1],[1,1,0],[0,1,1]])