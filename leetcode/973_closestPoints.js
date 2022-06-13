/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */

 var PriorityQueue = function (points) {
    this.heap = [null]
    
    this.removeMin = function () {
        let end = this.heap.length - 1
        let temp = this.heap[1]
        this.heap[1] = this.heap[end]
        this.heap[end] = temp

        let lastPoint = this.heap.pop().data
        
        minHeapify(this.heap, 1)
        
        return lastPoint
    }
    
    for (let i = 0; i < points.length; i++) {
        this.heap.push({
            priority: dist(points[i][0],points[i][1]),
            data: [points[i][0], points[i][1]]
        })
    }
    
    buildHeap(this.heap)
    
    function dist(a, b) {
        return (a**2 + b**2)**(1/2)
    }
    
    function buildHeap(heap) {
        let start = Math.floor(heap.length/2) + 1
        for (let i = start; i > 0; i--) {
            minHeapify(heap, i)
        }
    }
    
    function minHeapify(heap, i) {
        let l
        let r
        let smallest
        
        while (true) {
            l = 2 * i
            r = 2 * i + 1
            
            if (l < heap.length && heap[l].priority < heap[i].priority) {
                smallest = l
            } else {
                smallest = i
            }

            if (r < heap.length && heap[r].priority < heap[smallest].priority) {
                smallest = r
            }
            if (smallest === i) {
                break
            } else {
                let temp = heap[i]
                heap[i] = heap[smallest]
                heap[smallest] = temp
                i = smallest
            }
        }
    }
}


var kClosest = function(points, k) {
    let result = []
    let pq = new PriorityQueue(points) 
    
    for (let i = 0; i < k; i++) {
        let [x, y] = pq.removeMin()
        result.push([x, y])
    }
    
    return result 
};

kClosest([[1,3],[-2,2]], 1)