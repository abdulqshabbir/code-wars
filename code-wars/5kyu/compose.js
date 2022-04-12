/*
    Let's make a function called compose that accepts a value as a parameter, as well as any number of functions as additional parameters.
    The function will return the value that results from the first parameter being used as a parameter for all of the accepted function parameters in turn. 
*/

var compose = function(val, ...rest) {
    if (rest.length === 0) return val
    let result = val
    while (rest.length !== 0) {
      let nextFunc = rest.shift() 
      result = nextFunc(result)
    }
    return result
}

var compose = (val, ...fns) => fns.reduce((acc, fn) => fn(acc), val)
