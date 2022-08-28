var equalPairs = function(grid) {
    let rows = new Map()
    let res = 0

    for (let row = 0; row < grid.length; row++) {
        let currRow = grid[row]
        let currKey = currRow.join(",")
        if (!rows.has(currKey)) rows.set(currKey, 0)
        
        rows.set(currKey, rows.get(currKey) + 1)
    } 
    
   for (let col = 0; col < grid.length; col++) {
       let colValues = []
       for (let row = 0; row < grid.length; row++) {
           colValues.push(grid[row][col])
       }
       let colKey = colValues.join(",")
       if (rows.has(colKey)) res += rows.get(colKey)
    } 
    
    return res
};