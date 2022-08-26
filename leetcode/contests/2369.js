var validPartition = function(nums) {
    // dp[i] describes if we can create a valid partition up until index i
	let dp = new Array(nums.length).fill(false)

    // seed initial values
    if (nums[0] === nums[1]) {
        // partition up to index 1 can only be valid if the first two nums are equal
        dp[1] = true
    } 
    if (nums[0] === nums[1] && nums[1] === nums[2]) {
        // partition up to index 2 is valid if the first three numbers are equal
        dp[2] = true
    } 
    if (nums[0] + 1 === nums[1] && nums[1] + 1 === nums[2]) {
        // partition up to index 2 is valid if the first three number are consecutive
        dp[2] = true
    }

    // for each index i, i>=3, dp[i] will be valid if one of our three conditions are met
    for (let i = 3; i < nums.length; i++) {
        if (isValid1(i, dp, nums) || isValid2(i, dp, nums) || isValid3(i, dp, nums)) {
            dp[i] = true
        }
    }

    return dp[nums.length - 1]
}

const isValid1 = (i, dp, nums) => {
    // if a partition can be created up to two indices back (i-2) and the last two numbers of our partition are equal => return true
    return dp[i-2] && nums[i-1] === nums[i]
}
const isValid2 = (i, dp, nums) => {
    // if a parition can be created up to three indices back and the last three numbers are equal => return true
    return dp[i-3] && nums[i-2] === nums[i-1] && nums[i-1] === nums[i]
}

const isValid3 = (i, dp, nums) => {
    // if a parition can be created up to three indices back and the last three numbers are consecutive => return true
    return dp[i-3] && nums[i-2] + 1 === nums[i-1] && nums[i-1] + 1 === nums[i]
}

console.log(validPartition([579611,579611,579611,731172,731172,496074,496074,496074,151416,151416,151416]))