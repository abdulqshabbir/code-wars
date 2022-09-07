var spiralMatrix = function(m, n, head) { 
    let matrix = (new Array(m).fill()).map(() => new Array(n).fill(-1))
    
    let lCol = 0
    let rCol = n - 1
    let tRow = 0
    let bRow = m - 1

    let r = 0
    let c = 0

    while (head !== null) {
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
        c++
    }
    return matrix
};


class ListNode {
    constructor(val, next) {
        this.val = val ?? 0
        this.next = next ?? null
    }
}

let dummy = new ListNode(0)
let llArr = [3,0,2,6,8,1,7,9,4,2,5,5,0]

let curr = dummy
let currIdx = 0

while (currIdx < llArr.length) {
    curr.next = new ListNode(llArr[currIdx])
    currIdx++
    curr = curr.next
}

console.log(spiralMatrix(3, 5, dummy.next))