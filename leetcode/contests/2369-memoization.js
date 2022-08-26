const areNextTwoValid = (nums, i) => nums[i+1] === nums[i]

const areNextThreeValid = (nums, i) => 
    (nums[i] === nums[i+1] && nums[i+1] === nums[i+2])||
    (nums[i] + 1 === nums[i+1] && nums[i+1] + 1 === nums[i+2])

var validPartition = function(nums) {
    const cache = new Map()
    let len = nums

    function validate(i) {
        if (cache.has(i)) return cache.get(i)
        else if (i === len - 1) return false
        else if (i === len - 2) return areNextTwoValid(nums, i)
        else if (i === len - 3) return areNextThreeValid(nums, i)

        const canMakePartition1 = validate(i + 2)
        const canMakePartition2 = validate(i + 3)
        cache.set(i + 2, canMakePartition1)
        cache.set(i + 3, canMakePartition2)

        return canMakePartition1 || canMakePartition2
    }

    return validate(0)
}

console.log(validPartition([993335,993336,993337,993338,993339,993340,993341]))