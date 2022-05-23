var hasCycle = function(head) {
    let nodes = new Map()
    let curr = head
    
    while (curr) {
        if (nodes.has(curr)) {
            return true
        } else {
            nodes.set(curr, true)
        }
        curr = curr.next
    }
    
    return false
};

var hasCycle = function(head) {
    let slow = head
    let fast = head
    
    while (fast && fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
        if (slow === fast) return true
    }
    
    return false
};