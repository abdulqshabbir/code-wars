var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(420)
    let newHead = dummy
    let newTail = dummy
    
    while (list1 && list2) {
        if (list1.val < list2.val) {
            newTail.next = new ListNode(list1.val)
            list1 = list1.next
        } else {
            newTail.next = new ListNode(list2.val)
            list2 = list2.next
        }
        newTail = newTail.next
    }
    
    if (list1) {
        newTail.next = list1 
    }
    if (list2) {
        newTail.next = list2
    }
    
    return newHead.next
    
};