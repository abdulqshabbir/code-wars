function Heap(values) {
    this.heap = [null, ...values]
    buildHeap(this.heap) // O(n)
    
    this.add = function (val) { // O(logn)
        this.heap.push(val) 
        siftLastNodeUp(this.heap)
    }
    
    this.removeMax = function (val) { // O(logn)
        if (this.heap.length > 1) {
            let max = this.heap[1]
            this.heap[1] = this.heap[this.heap.length - 1] 
            this.heap[this.heap.length - 1] = max 
            this.heap.pop()
            maxHeapify(this.heap, 1) 
            
            return max 
        }
    }
    
    function siftLastNodeUp(arr) {
        let cIdx = arr.length - 1
        while (true) {
            let pIdx = Math.floor(cIdx/2)
            if (pIdx > 0 && arr[cIdx] > arr[pIdx]) {
                [arr[pIdx], arr[cIdx]] = [arr[cIdx], arr[pIdx]]
                cIdx = pIdx
            } else {
                break
            }
        } 
    } 
    
    function buildHeap(arr) {
        for (let i = Math.floor(arr.length/2) + 1; i > 0; i--) {
            maxHeapify(arr, i)
        } 
    }
    
    function maxHeapify(arr, i) {
        let largest 
        
        while (true) {
            let l = 2*i
            let r = 2*i + 1
            
            if (l < arr.length && arr[l] > arr[i]) {
                largest = l         
            } else {
                largest = i
            }
            
            if (r < arr.length && arr[r] > arr[largest]) {
                largest = r
            }
            
            if (largest === i) {
                break
            }
            else {
                [arr[largest], arr[i]] = [arr[i], arr[largest]]
                i =largest 
            }
        } 
    }
}

var findKthLargest = function(nums, k) {
    let heap = new Heap(nums)
    
    for (let i = 0; i < k - 1; i++) {
        heap.removeMax() 
    }
    
    return heap.removeMax()
};