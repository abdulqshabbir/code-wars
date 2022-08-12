var reorderList = function(head) {
    const nodes = []
    
    let curr = head
    while (curr !== null) {
        nodes.push(curr) 
        curr = curr.next
    }
    
    let l = 0
    let r = nodes.length -1
    
    head = nodes[0]
    curr = head
    
    while (l <= r) {
        if (l === r) {
            curr.next = null
            break
        }
        else if (l+1 === r) {
            curr.next = nodes[r]
            curr.next.next = null
        } else {
            curr.next = nodes[r]
            curr.next.next = nodes[l+1]
        }
        curr = curr.next.next
        l++
        r--
    }
    
};