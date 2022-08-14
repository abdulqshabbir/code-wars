var largestLocal = function(grid) {
    function findLocalMax(row, col) {
        let max = -Infinity
        for (let i = row -1; i <= row + 1; i++) {
            for (let j = col -1; j <= col + 1; j++) {
                max = Math.max(grid[i][j], max)
            }
        }
        return max
    }
    
    const N = grid.length
    const result = new Array(N-2).fill(0).map(e => new Array(0))
    
    for (let row = 1; row <= N-2; row++) {
        for (let col = 1; col <= N-2; col++) {
            let max = findLocalMax(row, col)
            result[row-1].push(max)
        }
    }
    
    return result
};

console.log(largestLocal([[9,9,8,1],[5,6,2,6],[8,2,6,4],[6,2,2,2]]))