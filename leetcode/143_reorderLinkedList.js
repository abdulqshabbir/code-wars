/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 
    arr = [L0, L1, L1.5, L2, L3] 
                    lr
            
    head -> L0 -> L3 -> L1 -> L2 -> Null
    
    prev -> L2
    
    
  
   set head to L0
   set prev to null
    
   while l < r
        set next pointer of node at r to null
        set next pointer of node at l to node at r
        if (prev is null) {
            set prev to node at r
        } else {
            set next pointer of prev to node at l 
            prev = prev.next.next
        }
        l++
        r--
    
    if l === r
        set next of node at l to be null
        prev.next = node at l
        
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
                prev.next == listArray[l]
                prev = prev.next
            }
            
        };