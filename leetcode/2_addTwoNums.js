function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var addTwoNumbers = function(l1, l2) {
    let carry = 0
    let dummy = new ListNode(0)
    let curr = dummy
    
    while (l1 || l2 || carry > 0) {
        let val1 = l1 ? l1.val : 0
        let val2 = l2 ? l2.val : 0
        let sum = val1 + val2 + carry

        carry = Math.floor(sum/10)
        sum = sum % 10
        curr.next = new ListNode(sum)
        
        l1 = l1 ? l1.next : null
        l2 = l2 ? l2.next : null
        curr = curr.next
    } 
    return dummy.next
};