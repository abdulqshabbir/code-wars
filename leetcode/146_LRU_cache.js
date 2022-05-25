var ListNode = function(val, next = null, prev = null) {
    this.val = val
    this.next = next
    this.prev = prev
}

var LinkedList = function() {
    this.head = null
    this.tail = null
}

LinkedList.prototype.add = function (key) {
    this.remove(key)
    if (this.tail === null) {
        this.head = new ListNode(key)
        this.tail = this.head
    } else {
        this.tail.next = new ListNode(key, null, this.tail)
        this.tail = this.tail.next
    }
}

LinkedList.prototype.pop = () => {
    if (this.tail) {
        let result = this.tail.val
        let previous = this.tail.prev
        previous.next = null
        this.tail.prev = null
        this.tail = previous
        return val
    }
}

LinkedList.prototype.removeFirst = () => {
    // head -> 1 <-> 2 -> null
    if (!this.head) {
        return null
    }
    if (!this.head.next) {
        let res = this.head.val
        this.head = null
        this.tail = null
        return res
    }
    let res = this.head.val
    let next = this.head.next
    next.prev = null
    this.head = this.head.next
    return res
}

LinkedList.prototype.remove = (key) => { 
    let curr = this.head
    
    while (curr) {
        if (curr.val === key) {
            let previous = curr.prev
            let next = curr.next
            previous.next = next
            next.prev = previous
            curr.next = null
            curr.prev = null
            break
        } 
    }
}

var LRUCache = function(capacity) {
    this.cache = new Map()
    this.list = new LinkedList()
    this.capacity = capacity
};

LRUCache.prototype.get = function(key) {
    if (this.cache.has(key)) {
        this.list.remove(key)
        this.list.add(key)
        return this.cache.get(key)
    } else {
        return -1
    }
};

LRUCache.prototype.put = function(key, value) {
    if (this.cache.has(key)) {
        this.list.remove(key)
        this.list.add(key)
        this.cache.set(key, value)
    } else {
        if (this.cache.size === this.capacity) {
            let keyToRemove = this.list.removeFirst()
            this.list.add(key)
            this.cache.set(key, value)
        } else {
            this.list.add(key)
            this.cache.set(key, value)
        }
    }
};

let cache = new LRUCache(2)
cache.put(1, 1)
cache.put(2, 2)
cache.get(1)
cache.put(3, 3)
cache.get(2)