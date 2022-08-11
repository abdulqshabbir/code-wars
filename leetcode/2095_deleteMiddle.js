/*
time: O(n)
space: O(1)
*/
var deleteMiddle = function(head) {
    if (head === null) return head
    
    if (head.next === null) {
        head = null
        return head
    }
    
    let prev = null
    let slow = head
    let fast = head
    
    while (fast !== null && fast.next !== null) {
        prev = slow
        slow = slow.next
        fast = fast.next.next
    }
    
    // slow references middle node
    // prev references node before middle node
    prev.next = slow.next
    
    return head
};