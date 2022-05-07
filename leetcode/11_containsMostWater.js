var maxArea = function(height) {
    let l = 0, r = height.length -1
    let maxArea = 0
    
    while (l < r) {
        let area = (r - l) * Math.min(height[l], height[r])
        if (area > maxArea) maxArea = area
        
        if (height[l] < height[r]) {
            l++
        } else if (height[r] < height[l]) {
            r--
        } else {
            if (height[l+1] > height[r-1]) {
                l++
            } else {
                r--
            }
        }
    }
    return maxArea
};