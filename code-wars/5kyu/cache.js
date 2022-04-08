/*
    If you are calculating complex things or execute time-consuming API calls, you sometimes want to cache the results. In this case we want you to create a function wrapper, which takes a function and caches its results depending on the arguments, that were applied to the function.
*/

function cache(func) {
    const cache = {}
    
    return function() {
      let key = JSON.stringify(arguments)
      if (!(key in cache)) {
        cache[key] = func.apply(null, arguments)
      }
      return cache[key]
    }
  }