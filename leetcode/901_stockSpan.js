var StockSpanner = function() {
    this.monoStack = []
};

StockSpanner.prototype.next = function(price) {
    let result = 1
    
    while (
        this.monoStack.length !== 0 &&
        price >= this.monoStack[this.monoStack.length - 1].p
    ) {
        const {p, span} = this.monoStack.pop() 
        result += span
    }
    
    this.monoStack.push({ p: price, span: result })
    
    return result
};