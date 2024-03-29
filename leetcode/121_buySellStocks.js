
/*
    You are given an array prices where prices[i] is the price of a given stock on the ith day.
    You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
    Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/
var maxProfit = function(prices) {
    let buyAt = prices[0] 
    let sellAt = prices[0]
    let maximumProfit = 0
    
    for (let price of prices) {
        if (price < buyAt) {
            buyAt = price
            sellAt = price
        }
        else if (price > sellAt) {
            sellAt = price
            maximumProfit = Math.max(maximumProfit, sellAt - buyAt)
        }
    }
    
    return maximumProfit
};