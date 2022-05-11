/*
    This solution reverses linked list in O(n) time and O(1) space
*/

var reverseList = function (head) {
  let current = head;
  let newRest = null;
  let oldRest;
  while (current !== null) {
    oldRest = current.next;
    current.next = newRest;
    newRest = current;
    current = oldRest;
  }

  return newRest;
};
