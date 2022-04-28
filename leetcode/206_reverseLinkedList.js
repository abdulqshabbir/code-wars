/*
    Given the head of a singly linked list, reverse the list, and return the reversed list.
*/

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

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