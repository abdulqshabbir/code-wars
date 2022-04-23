var StackNode = function(val) {
    this.val = val
    this.prev = null
    this.next = null
}

var Stack = function() {
    this.first = null
};

Stack.prototype.push = function(val) {
    if (!this.first) {
        this.first = new StackNode(val)
    } else {
        this.first.next = new StackNode(val)
        this.first.next.prev = this.first
        this.first = this.first.next
    }
}

Stack.prototype.pop = function() {
    if (this.first === null) {
        return
    }
    else if (this.first.prev === null) {
        this.first = null
    } else {
        let nodeToRemove = this.first
        let newFirst = this.first.prev
        newFirst.next = null
        nodeToRemove.prev = null
        this.first = newFirst
    }
}

Stack.prototype.top = function() {
    if (!this.first) return null
    return this.first.val
}

var MinStack = function() {
    this.s = new Stack()
    this.min = new Stack()
}

MinStack.prototype.push = function(val) {
    if (this.s.first === null) {
        this.s.push(val)
        this.min.push(val)
    } else {
        this.s.push(val)
        this.min.push(Math.min(val, this.min.first.val))
    }
}

MinStack.prototype.pop = function () {
    this.s.pop()
    this.min.pop()
}

MinStack.prototype.getMin = function() {
    return this.min.first.val
}

MinStack.prototype.top = function() {
    return this.s.first.val
}