
var Node = function (val) {
    this.val = val
    this.next = null
    this.previous = null
}

var MinStack = function() {
    this.min = Infinity
    this.last = null
};

/** 
 * @param {number} val
 * @return {void}
 
    last -> -2 <-> 0 <-> 10 <-> -10
 */
MinStack.prototype.push = function(val) {
    if (!this.last) {
        this.last = new Node(val)
    } else {
        this.last.next = new Node(val) 
        this.last.next.previous = this.last
        this.last = this.last.next
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (!this.last) return

    if (!this.last.previous) {
        this.last = null
    } else {
        let prev = this.last.previous
        prev.next = null 
        this.last = prev
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if (!this.last) return null
    return this.last.val
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    
};

let s = new MinStack()


s.push(1)
s.push(2)
s.push(3)

console.log(s.pop())
console.log(s.pop())
console.log(s.pop())
console.log(s.pop())