var pacificAtlantic = function(heights) {
    const res = []
    const ROWS = heights.length
    const COLS = heights[0].length
   
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            let visited = new Set()
            let connections = [false, false]
                if (exploreFlow(r, c, visited, connections, heights) === true) {
                res.push([r, c])
            }
        }
    }
    
    return res
};

function exploreFlow(r, c, visited, connections, heights) {
    let pos = r + "," + c
    if (visited.has(pos)) return
    visited.add(pos)
    
    if (isOnPacificBorder(r, c)) connections[0] = true
    if (isOnAtlanticBorder(r, c, heights.length, heights[0].length)) connections[1] = true
    
    if (connections[0] && connections[1]) return true
    
    let n = getLowerAltitudeNeighbors(r, c, heights)
    
    for (let [nr, nc] of n) {
        exploreFlow(nr, nc, visited, connections, heights)
    }
    
    return connections[0] && connections[1]
}

function getLowerAltitudeNeighbors(r, c, heights) {
    let neighbors = [[r-1, c], [r+1, c], [r, c-1], [r, c+1]] 
    let res = []
        
    for (let [nr, nc] of neighbors) {
        if (
            inBounds(r, c, heights) &&
            inBounds(nr, nc, heights) &&
            heights[r][c] >= heights[nr][nc]
        ) {
            res.push([nr, nc])
        }
    }
    return res
}

function inBounds(r, c, heights) {
    return r >= 0 && r < heights.length && c >= 0 && c < heights[0].length
}

function isOnPacificBorder(r, c) {
    return r === 0 || c === 0
}

function isOnAtlanticBorder(r, c, ROWS, COLS) {
    return r === ROWS - 1 || c === COLS -1
}

let heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
console.log(pacificAtlantic(heights))