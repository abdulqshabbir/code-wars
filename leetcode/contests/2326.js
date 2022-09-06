var spiralMatrix = function(m, n, head) { 
    let matrix = (new Array(m).fill()).map(() => new Array(n).fill(-1))
    
    let curr = head
    let lCol = 0
    let rCol = m - 1
    let tRow = 0
    let bRow = n - 1

    let r = 0
    let c = 0

    while (curr !== null) {
        matrix[r][c] = head.val
        head = head.next

        if (head === null) return matrix
        
        while (c < rCol) {
            c++
            matrix[r][c] = head.val
            head = head.next
            if (head === null) return matrix
        }
        tRow++

        while (r < bRow) {
            r++
            matrix[r][c] = head.val
            head = head.next
            if (head === null) return matrix
        }
        rCol--

        while (c > lCol) {
            c--
            matrix[r][c] = head.val
            head = head.next
            if (head === null) return matrix
        }
        bRow--

        while(r > tRow) {
            r--
            matrix[r][c] = head.val
            head = head.next
            if (head === null) return matrix
        }
        lCol++
    }
    return matrix
};


class ListNode {
    constructor(val, next) {
        this.val = val
        this.next = next ?? null
    }
}

let ll = new ListNode(1)
ll.next = new ListNode(2)
ll.next.next = new ListNode(3)
ll.next.next = new ListNode(4)

console.log(spiralMatrix(2, 3, ll))