function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
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

var reorderList = function(head) {
    if (head.next === null) return
    
    // find middle of list
    let slow = head
    let fast = head.next
    while (fast && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
    }
    
    // reverse second half
    let secondHead = slow.next
    let secondRest = secondHead.next
    slow.next = null
    let prev = null
    
    while (secondRest !== null) {
        secondRest = secondHead.next
        secondHead.next = prev
        prev = secondHead
        secondHead = secondRest
    }
    if (prev === null) {
        prev = secondHead
    }

    // stich together lists
    let first = head, second = prev
    while (second) {
        let temp1 = first.next
        let temp2 = second.next
        first.next = second
        second.next = temp1
        first = temp1
        second = temp2
    }
};