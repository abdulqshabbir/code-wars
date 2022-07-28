var checkValid = function(matrix) {
    const rows = new Map() // hashmap<row number => set of number in row>
    const cols = new Map()
    
    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[0].length; c++) {
            if (!rows.has(r)) rows.set(r, new Set())
            if (!cols.has(c)) cols.set(c, new Set())
        }
    }
    
    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[0].length; c++) {
            const val = matrix[r][c]
            if (rows.get(r).has(val)) return false
            if (cols.get(c).has(val)) return false
            
            rows.get(r).add(val)
            cols.get(c).add(val)
        }
    }
    
    return true
};