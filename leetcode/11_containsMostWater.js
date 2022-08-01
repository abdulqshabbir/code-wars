var maxArea = function(height) {
    let maxArea = -Infinity
    
    let l = 0
    let r = height.length - 1
    
    while (l < r) {
        const area = (r - l) * Math.min(height[l], height[r])
        
        if (area > maxArea) maxArea = area
        
        if (height[l] < height[r]) {
            l++
        } else {
            r--
        }
    }
    return maxArea
};