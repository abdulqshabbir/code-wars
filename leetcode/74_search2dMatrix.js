// time complexity: O(logm + logn)
// space complexity: O(1)
var searchMatrix = function(matrix, target) {
    let row = binarySearchRow(matrix, target) 
    if (row === false) return false
    
    let col = binarySearchCol(matrix[row], target)
    if (col === false) return false
    
    return true
};

function binarySearchCol(arr, target) {
    let start = 0
    let end = arr.length - 1
    
    while (start <= end) {
        let midIdx = Math.floor((start+end)/2)
        let middle = arr[midIdx]
        if (target === middle) return true
        
        if (target < middle) {
            end = midIdx - 1
        } else {
            start = midIdx + 1
        }
    }
    
    return false
}

function binarySearchRow(matrix, target) {
    let ROWS = matrix.length
    let COLS = matrix[0].length
    
    let upRow = 0
    let downRow = ROWS - 1
    
    let middleRow
    let firstRowVal
    let lastRowVal
    
    while (upRow <= downRow) {
        middleRow = Math.floor((upRow+downRow)/2)
        firstRowVal = matrix[middleRow][0]
        lastRowVal = matrix[middleRow][COLS - 1]
        console.log(middleRow)
        if (target >= firstRowVal && target <= lastRowVal)  {
            return middleRow
        }
        else if (target < firstRowVal) {
            downRow = middleRow - 1
        }
        else {
            upRow = middleRow + 1
        }
    }
    
    return false
}

searchMatrix([[1, 3]], 3)