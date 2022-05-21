// O(n) time and O(1) space
var removeNthFromEnd = function(head, n) {
    let sz = 0
    let curr = head
    
    while (curr !== null) {
        sz++
        curr = curr.next
    }
    
    let nthFromEnd = sz
    let previous = null
    let current = head
    
    while (nthFromEnd !== n) {
        previous = current
        current = current.next
        nthFromEnd--
    }
    if (n === sz) {
        head = head.next
    } else {
        previous.next = current.next
    }

    return head    
};

// This solution also runs in O(1) space and O(n) time but only makes
// one pass through the linked list
var removeNthFromEnd = function(head, n) {
    let curr = head
    let fast = head
    let gap = n
    
    while (gap > 0) {
        fast = fast.next
        gap--
    }
    
    if (fast === null) {
        head = head.next
        return head
    }
    
    while (fast.next !== null) {
        curr = curr.next
        fast = fast.next        
    }
    
    curr.next = curr.next.next
    
    return head
};