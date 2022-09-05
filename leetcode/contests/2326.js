var spiralMatrix = function(m, n, head) { 
    let matrix = (new Array(m).fill()).map(() => new Array(n).fill(-1))
    
    let visited = new Set()
    let curr = head

    function dfs(r, c, matrix, visited) {
        let ROWS = matrix.length
        let COLS = matrix[0].length
        if (!curr) return
        if (r < 0 || r >= ROWS || c < 0 || c >= COLS) return
        if (matrix[r][c] !== -1) return
        if (visited.has(r + "," + c)) return
        
        visited.add(r + "," + c)
        matrix[r][c] = curr.val
        curr = curr.next
        
        dfs(r, c + 1, matrix, visited, curr)
        dfs(r+1, c, matrix, visited, curr)
        dfs(r, c - 1, matrix, visited, curr)
        dfs(r-1, c, matrix, visited, curr)
    }

    dfs(0, 0, matrix, visited)
    return matrix
};


class ListNode {
    constructor(val, next) {
        this.val = val
        this.next = next ?? null
    }
}

let ll = new ListNode(3)
ll.next = new ListNode(0)
ll.next.next = new ListNode(1)

console.log(spiralMatrix(2, 3, ll))