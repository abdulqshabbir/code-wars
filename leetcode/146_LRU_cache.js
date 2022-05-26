var Node = function(val, key = null) {
    this.val = val
    this.key = key
    this.prev = null
    this.next = null 
}

var LRUCache = function(capacity) {
    this.capacity = capacity
    this.cache = new Map()   // key -> Node reference
    
    this.left = new Node(0)  // this.left.next LRU
    this.right = new Node(0) // this.right.prev MRU
    
    this.left.next = this.right
    this.right.prev = this.left
};

LRUCache.prototype.remove = (node) => {
    let previous = node.prev 
    let next = node.next
    
    previous.next = next
    next.prev = previous
    
    node.prev = null
    node.next = null
}

LRUCache.prototype.push = function (node) {
    let previous = this.right.prev
    let next = this.right

    previous.next = node
    next.prev = node

    node.prev = previous
    node.next = next
}

LRUCache.prototype.get = function(key) {
    if (this.cache.has(key)) {
        let val = this.cache.get(key).val
        let node = this.cache.get(key)
        
        this.remove(node)  
        this.push(node)
        
        return val
    }
    return -1
};

LRUCache.prototype.put = function(key, value) {
    let newNode = new Node(value, key)
    if (this.cache.has(key)) {
        this.remove(this.cache.get(key)) 
        this.push(newNode)
        this.cache.set(key, newNode)
    } else {
        // at capacity
        if (this.cache.size >= this.capacity) {
            // find LRU node 
            let lruNode = this.left.next
            
            // remove LRU node from queue
            let lruKey = lruNode.key
            
            // remove corresponding (key, value) from cache
            this.cache.delete(lruKey)
            this.remove(lruNode)
            
            // add newNode to queue
            this.push(newNode)
            
            // add newNode to cache
            this.cache.set(key, newNode)
        } else {
        // more room available
            this.push(newNode)    
            this.cache.set(key, newNode)
        }
    }
};
let cache = new LRUCache(2)
cache.put(1, 1)
cache.put(2, 2)
cache.get(1)
cache.put(3, 3)
cache.get(2)
cache.push(4,4)
cache.get(1)
cache.get(3)
cache.get(4)