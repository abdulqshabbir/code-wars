var coinChange = function(coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity)
    
    dp[0] = 0
    
    for (let subAmount = 1; subAmount <= amount; subAmount++) {
        let minCoins = Infinity
        for (let coin of coins) {
            if (subAmount - coin >= 0) {
               let numCoins = 1 + dp[subAmount-coin] 
               minCoins = Math.min(minCoins, numCoins)
            }
        }
        dp[subAmount] = minCoins
    }
    
    return dp[amount] === Infinity ? -1 : dp[amount]
};