
/*
    Oh no, our Math object was "accidently" reset. 
    Can you re-implement some of those functions?
    We can assure, that only non-negative numbers are passed as arguments
    So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.
*/

function getWholePartAndDecimal(number) {
    let numStr = number.toString()
    let whole 
    let decimal
    if (numStr.includes(".")) {
      whole = parseInt(numStr.split(".")[0])
      decimal = parseFloat("0." + numStr.split(".")[1]) 
    } else {
      whole = number
      decimal = 0
    }
    return [whole, decimal] 
  }
Math.round = function(number) {
    let [whole, decimal] = getWholePartAndDecimal(number)
    if (decimal >= 0.5) {
      return ++whole
    } else {
      return whole
    }
};
  
Math.ceil = function(number) {
    let [whole, decimal] = getWholePartAndDecimal(number)
    if (decimal === 0) {
      return whole
    } else {
      return ++whole;
    }
};
  
Math.floor = function(number) {
    let [whole, decimal] = getWholePartAndDecimal(number)
    return whole
};