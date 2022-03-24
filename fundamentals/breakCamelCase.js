/*
    Complete the solution so that the function will break up camel casing, using a space between words.
    Example:

    "camelCasing"  =>  "camel Casing"
    "identifier"   =>  "identifier"
    ""             =>  ""
*/

function solution(string) {
    const isUpperCaseLetter = (char) => char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90
    let result = ''
    
    for (let char of string) {
      if (isUpperCaseLetter(char)) {
        result += ' ' + char
      }
      else {
        result += char
      }
    }
    return result
  }
  