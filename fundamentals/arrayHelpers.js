/*
    Explanation:

    square() must return a copy of the array, containing all values squared
    cube() must return a copy of the array, containing all values cubed
    average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
    sum() must return the sum of all array values
    even() must return an array of all even numbers
    odd() must return an array of all odd numbers

    Note: the original array must not be changed in any case!
*/

Array.prototype.square = function() {
    return this.map(elem => elem * elem)
}
Array.prototype.cube = function() {
    return this.map(elem => elem **3)
}
Array.prototype.sum = function() {
    let result = 0
    this.forEach(num => {
        result += num
    })
    return result
}
Array.prototype.average = function() {
    return this.sum()/this.length
}
Array.prototype.even = function() {
    return this.filter(num => num % 2 === 0)
}
Array.prototype.odd = function() {
    return this.filter(num => num % 2 === 1)
}