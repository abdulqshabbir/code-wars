function findIndexAndValueOfMax(arr, skip = -1) {
   let max = -Infinity
   let maxIdx = -1
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max && i !== skip) {
            max = arr[i]
            maxIdx = i
        }
    }
    
    return [max, maxIdx]
}

var fillCups = function(amount) {
    let res = 0
    
    while (!amount.every(num => num === 0)) {
        let [ max, maxIdx ] = findIndexAndValueOfMax(amount)        
        let [ secondMax, secondMaxIdx ] = findIndexAndValueOfMax(amount, maxIdx)
    
        if (max > 0 && secondMax > 0) {
            amount[maxIdx]--
            amount[secondMaxIdx]--
        } else if (max > 0) {
            if (max > 0) amount[maxIdx]--
        } else {
            break;
        }
        
        res++
    }
    return res
};