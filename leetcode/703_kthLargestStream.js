var KthLargest = function(k, nums) {
    this.heapSize = k
    this.heap = [null, ...nums.slice()]

    this.buildHeap = function() {
        let start = Math.floor(this.heap.length/2) + 1
        for (let i = start; i >= 1; i--) {
            minHeapify(this.heap, i)
        }
        while (this.heap.length > k + 1) {
            popMin(this.heap)
        }
    }
    this.buildHeap()

    this.add = function(val) {
        if (this.heap.length < k + 1) {
            this.heap.push(val)
            percolateUp(this.heap)
        }
        else {
            this.heap.push(val)
            percolateUp(this.heap)
            popMin(this.heap)
        }
        return this.heap[1]
    }
    function percolateUp(heap) {
        let cIdx = heap.length - 1
        let pIdx

        while (true) {
            pIdx = Math.floor(cIdx/2)
            if (pIdx > 0 && heap[cIdx] < heap[pIdx]) {
                [heap[cIdx], heap[pIdx]] = [heap[pIdx], heap[cIdx]]
                cIdx = pIdx
            } else {
                break
            }
        }
    }
    function minHeapify (heap, i) {
        while (true) {
            let l = 2 * i
            let r = 2 * i + 1
            let smallest = i

            if (l < heap.length && heap[l] < heap[i]) {
                smallest = l
            }

            if (r < heap.length && heap[r] < heap[smallest]) {
                smallest = r
            }

            if (smallest === i) {
                break
            }
            else {
                let temp = heap[i]
                heap[i] = heap[smallest]
                heap[smallest] = temp
                i = smallest
            }
        }
    }
    function popMin (heap) {
        [heap[1], heap[heap.length - 1]] = [heap[heap.length - 1], heap[1]]
        let val  = heap.pop()
        minHeapify(heap, 1)
        return val
    }
};