/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
var reorderList = function(head) {
    let listArray = []
    let curr = head 
    while (curr !== null) {
        listArray.push(curr)
        curr = curr.next
    }
    
    let l = 0
    let r = listArray.length - 1
    
    head = listArray[0]
    let prev = null
    
    while (l < r) {
        listArray[r].next = null
        listArray[l].next = listArray[r]
        if (prev === null) {
            prev = listArray[r]
        } else {
            prev.next = listArray[l]
            prev = prev.next.next
        }
        l++
        r--
    }
    
    if (l === r) {
        listArray[l].next = null
        prev.next = listArray[l]
        prev = prev.next
    }
    
};

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

let l = new ListNode(1)

l.next = new ListNode(2)
l.next.next = new ListNode(3)

reorderList(l)