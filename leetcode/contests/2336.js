var SmallestInfiniteSet = function() {
    this.added = new Set()
    for (let i = 1; i <= 1000; i++) this.added.add(i)
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
    let min = Math.min(...Array.from(this.added))
    console.log('min', min)
    this.added.delete(min)
    return min
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
    if (!this.added.has(num)) {
        this.added.add(num)
    }
};