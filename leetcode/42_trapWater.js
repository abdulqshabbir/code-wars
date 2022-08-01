/*
    time complexity: O(n) where n: len(height)
    space complexity: O(n)
*/

var trap = function(height) {
    const leftMaxHeights = new Array(height.length).fill(0)
    const rightMaxHeights = new Array(height.length).fill(0)
    const min = new Array(height.length).fill(0)
    let res = 0
    
    for (let i = 1; i < height.length; i++) {
        leftMaxHeights[i] = Math.max(height[i-1], leftMaxHeights[i-1])
    }
    
    for (let j = height.length - 2; j >= 0; j--) {
        rightMaxHeights[j] = Math.max(height[j+1], rightMaxHeights[j+1]) 
    }
    
    for (let k = 0; k < min.length; k++) {
        min[k] = Math.min(leftMaxHeights[k], rightMaxHeights[k])
        if (height[k] < min[k]) {
            res += min[k] - height[k]
        }
    }

    return res
};