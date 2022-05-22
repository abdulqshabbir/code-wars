var copyRandomList = function(head) {
    let originalToCopy = new Map()
    originalToCopy.set(null, null)
    
    let curr = head
    while (curr) {
        originalToCopy.set(curr, new Node(curr.val))
        curr = curr.next
    }
    
    curr = head
    while (curr) {
        let copy = originalToCopy.get(curr)
        copy.next = originalToCopy.get(curr.next)
        copy.random = originalToCopy.get(curr.random)
        curr = curr.next
    }
    
    return originalToCopy.get(head)
};