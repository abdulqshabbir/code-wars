/*
    This solution reverses linked list in O(n) time and O(1) space
*/

var reverseList = function(head) {
    if (!head || !head.next) return head
    
    let rest = head.next
    let current
    head.next = null
    
    while (rest !== null) {
        current = rest
        rest = rest.next
        current.next = head
        head = current
    }
    
    return head
};

// This naive solution runs in O(n) time and has O(n) space
var reverseList = function(head) {
    let curr = head
    let newList = null
    
    while (curr !== null) {
        if (!newList) {
            newList = new ListNode(curr.val)
        } else {
            let n = new ListNode(curr.val)
            n.next = newList
            newList = n
        }
        curr = curr.next
    }
    
    head = newList
    return head
};


/*
    Recursive solution which runs in O(n) space and O(n) time
*/
function reverseRecursively(curr, newHead) {
    if (curr === null) {
        // if no new node left to reverse, return new head
        return newHead
    }
    // grab the remaining nodes we still have to reverse
    let rest = curr.next
    // reverse link at the current node
    curr.next = newHead
    // update head of new list
    newHead = curr
    return reverseRecursively(rest, newHead)
}