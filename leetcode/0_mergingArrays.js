var merge = function(nums1, m, nums2, n) {
    let p1 = m - 1
    let p2 = n - 1
    let i = nums1.length - 1
    
    while (p1 >= 0 && p2 >= 0) {
        if (nums1[p1] >= nums2[p2]) {
            nums1[i] = nums1[p1]
            p1--
        } else {
            nums1[i] = nums2[p2]
            p2--
        }
        i--
    }
    while (p2 >= 0) {
        nums1[i] = nums2[p2]
        p2--
        i--
    }
};

merge([1,2,3,0,0,0], 3, [2,5,6] ,3)