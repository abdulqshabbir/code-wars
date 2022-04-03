
/*
    You are given an array prices where prices[i] is the price of a given stock on the ith day.
    You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
    Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/
var maxProfit = function(prices) {
    let maxProfit = 0
    let profitSoFar = 0 
    let b = 0 // buy index
    let s = 1 // sell index
    while (s < prices.length) {
        profitSoFar = prices[s] - prices[b]
        if (prices[s] >= prices[b]) {
            maxProfit = Math.max(profitSoFar, maxProfit)
        } else {
            b = s
        }
        s++
    }
    
    return maxProfit
};