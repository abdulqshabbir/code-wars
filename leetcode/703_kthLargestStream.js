var KthLargest = function(k, nums) {
    this.k = k
    this.heap = [null]
    // O(n) time O(n) space
    for (let i = 0; i < nums.length; i++) {
        this.heap.push(nums[i])
    }
   // O(n) time 
    this.buildHeap()
};
KthLargest.prototype.getParentIdx = function(i) {
    let parentIdx = Math.floor(i/2)
    return parentIdx
}
KthLargest.prototype.getLeftChildIdx = function(i) {
    let childIdx = 2*i
    return childIdx
}
KthLargest.prototype.getRightChildIdx = function(i) {
    let childIdx = 2*i + 1
    return childIdx
}
KthLargest.prototype.swap = function(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
KthLargest.prototype.maxHeapify = function(i) {
    // runs in O(logn) time where n is the height of the subtree rooted at i
    while (true) {
        let l = this.getLeftChildIdx(i) 
        let r = this.getRightChildIdx(i)
        let largest = null
        
        if (l < this.heap.length && this.heap[l] > this.heap[i]) {
            largest = l
        } else {
            largest = i
        }
        
        if (r < this.heap.length && this.heap[r] > this.heap[largest]) {
            largest = r
        }
        
        if (largest === i) {
            break
        }
        
        this.swap(this.heap, i, largest)
        i = largest
    } 
}
KthLargest.prototype.buildHeap = function() {
    // runs in O(n) time where n is the length of nums
    let start = Math.floor(this.heap.length/2) + 1
    for (let i = start; i >= 1; i--) {
        this.maxHeapify(i)
    }
}
KthLargest.prototype.remove = function() {
    // runs in O(logn) time where n is the length of nums
    if (this.heap.length > 1) {
        this.swap(this.heap, 1, this.heap.length - 1)
        let res = this.heap.pop()
        this.maxHeapify(1)
        return res
    }
}
KthLargest.prototype.add = function(val) {
    // runs in O(logn) time where n is the length of nums
    this.heap.push(val)
    let i = this.heap.length - 1 
    
    while(true) {
        let p = this.getParentIdx(i)
        if (p > 0 && this.heap[i] > this.heap[p]) {
            this.swap(this.heap, i, p)
            i = p
            continue
        } else {
            break
        }
    }
    
    return this.getKthLargest()
};
         
KthLargest.prototype.getKthLargest = function () {
    // remove from heap k times to get kth-largest value
    let removed = []
    
    for (let i = 0; i < this.k; i++) {
        removed.push(this.remove()) 
    }
    // add back removed values
    for (let i = 0; i < this.k; i++) {
        this.add(removed[i])
    }
    // last value is kth largest
    return removed[this.removed.length - 1]
}
