/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let result = [];

  solve(result, n, [], "", n);

  return result;
};

function solve(result, openLeft, openStack, soFar, n) {
  if (openStack.length === 0 && openLeft === 0) {
    while (soFar.length < 2 * n) {
      soFar += ")";
    }
    result.push(soFar);
    return;
  }
  if (openStack.length !== 0) {
    let newOpenStack = openStack.slice();
    newOpenStack.pop();
    solve(result, openLeft, newOpenStack, soFar + ")", n);
  }
  if (openStack.length === 0 && openLeft > 0) {
    let newOpenStack = openStack.slice();
    newOpenStack.push("(");
    solve(result, openLeft - 1, newOpenStack, soFar + "(", n);
  }
}

console.log(generateParenthesis(2));
