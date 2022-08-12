# Problems to Revisit
- [x] Leetcode 347 Top K most frequent elements (completed again on August 9th)
- [ ] Leetcocde 49 Group anagrams
- [ ] Leetcode 36 Valid Sudoku
- [ ] Leetcode 128 Longest Consequtive Sequence
- [ ] Leetcode 424 longest repeating character replacement
- [ ] Leetcode 22 generate parenthesis
- [ ] Leetcode 143 reorder list

# Codewars Solutions

A colletion of codewars problems and their solutions.

## Lessons Learned from convertHexToRGB

I learned that the `parseInt` function accepts two arguments: a string and an optional radix (base). `parseInt(string, radix)` lets us convert strings to numerical values even if they are not in base 10.  This makes it a very convienient function when working with hexadecimal values.

## Lessons Learned from primeFactors
I learned that to write down the prime factor decomposition for n I don't necessarily have to find all primes up to n. I can just iterate i from 2, 3, ... , n and anytime n is divisible by i, i must be a prime factor since we're incrementing i up from 2. If keep dividing n by i until it is no longer divisible than we gather all the prime factors of n from smallest to largest.

## Lessons Learned from breakCamelCase
Boolean checks with a more "functional" style are easier to read. 

## Lessons Learned from arrayHelpers
I learned that there are two main ways of extending the `Array` "class" or constructor function. The first is to simply add methods to the `Array.prototype` property directly. Although this works, the better way of extending the `Array` class is to use the `Object.defineProperty(obj, propName, options)` method. `obj` is the object on which to define the property, `propName` is the name of the property and `options` is an object with the property value and other configuration options. Using this, we can define a new property on any object and it will be NOT be enumerable or writable by default. This means that the new property will not show up in a `for ... of` iteration and the property cannot be reassigned.

## Lessons Learned from titleCaes
I learned that reassigning elements using the first parameter of the `forEach` loop is not possible. However, the `forEach` loop comes with additional parameters to help with this.  Using all three parameters in the form `forEach(elem, idx, arr)` lets to perform a reassignment of `arr` at index `idx` as you loop through the array by using the syntax `arr[idx] = ...`.

## Lessons Learned from takeAWalk
I learned that when only movement in the up, down, right, left directions is allowed, one can use two independent variables to keep track of left-right or up-down motion separately.

## Lessons Learned from persistance
I learned how to use recursion on an unfamilar problem. 

## Lessons Learned from maximumSubarray
If looking for a consecutive maximum sum, you can reset the currentSum to zero each time currentSum is negative. This is because adding values that are negative to the sum guarantees that the sum will get smaller and so each step takes the locally optimal path.

## Lessons Learned from twoSum
If the array is already sorted, use a "sliding window" pattern where you start one pointer on the left and one on the right. Move the pointers one step in the direction needed for the elements to sum up to the target -- this ensures each step is locally optimal.

## Lessons Learned from buySellStocks
Very similar to the twoSum problem where a "sliding window" of two pointers can be used maximize profits by keeping the left pointer on the lowest price seen so far and incrementing the right pointer through the array.  Any time the price drops on a given day both pointers can reset to the new lowest price.

## Lessons Learned from containsDuplicate
Learned that there are multiple ways of checking for a duplicate and they involve tradeoffs in space and time. Sorting the array and checking adjacent elements can help you find duplicates in O(nlogn) time and O(1) space. However, using a hashmap reduces time complexity to O(n) and increases space complexity to O(n)

## Lessons Learned from containsDuplicate
This question was quite difficult to do without the division operation. However, creating a "preProduct" and "postProduct" auxillary array lets one store away the products in O(n) time using O(n) space. Another option to use less space is to overwrite the result array with the "preProduct" array and then compute the postProduct on the fly. This approach uses O(1) space.

## Lessons Learned from findMinInRotatedArray
Learned how to do a binary search recursively to solve the problem.

## Lessons Learned from perfectSquare
Learned that the naive approach runs in O(sqrt(n)) where you try to find the square of numers from 1 ... n and stop when the square equals num or is larger. However, a binary search, where we find the middle number from 1 ... n and see if its square is equal to num lets us eliminate half the numbers in each iteration, therefore running in O(logn) time which is faster.

## Lessons Learned from removeDuplicates
Learned that if given a sorted array with duplicate values and asked to remove duplicates we can use a two pointer approach to solve the problem. One pointer is used to keep track of an "empty" slot for inserting new unique values, the other pointer runs through the array and anytime there is a unique value (prev val !== val) it can insert the unique value into the empty slot.

## Lessons learned from cache (Code Wars)
Learned that we can utilize closures to cache "expensive" API calls. To cache away results we can use a wrapper function with a hashmap which returns the function that actually makes the expensive API call. Each time the function is called with new arguments we can store away the result into our hashmap and other function calls can access them through closure.
Also learned that if we're not sure what arguments a function is called with, we can use the `arguments` object which gives us an Array-like list of arguments during call time. To convert it into an array we can use `Array.from(arguments)`.
Finally, `func.apply(null, arguments)` can be used to make function calls with the `arguments` object. `func.apply(null, arguments)` takes a list of arguments and `func.call(null, arg1, arg2,..., argN)` takes all arguments one at a time.

## Lessons learned from maxBinaryDepth (Leet Code) (April 10th)
Learned that we can find the max depth of a binary tree in three fundamentally different ways. Although initially a recursive DFS approach occured to me, I realized that there are at least two other ways.  The first involves doing DFS using a stack instead of the call stack provided by the browser. The second involves doing a level-order (BFS) traversal using a queue. Next challenge is to solve the problem in these two different ways.

## Lessons Learned from compose
Learned that there was a very clean one-line solution if you want to pass `val` through a series of functions `f1, f2, f3, ..., fn` invovling the reduce function.

## Lessons Learned from sameTree
Leared that a recursive DFS algorithm is a clean way of checking if two trees are identical.

## Lessons Learned from levelOrderTraversal
This problem was especially difficult when trying to find my bug. I learned that to do a level order traversal we can use a queue data structure. For each level we can keep pulling nodes off the queue and addign their non-null children onto the queue. We can take a "snapshot" of the length of the queue before we process the nodes to tell us how many iterations to run to capture all nodes on a particular level.

## Lessons Learned from isSubtree
This problem uses an earlier concept of using DFS to check if two trees are identical. To check if s is a subtree of t, we can break it down into 4 main cases:
1. if t and s are both empty then s is a subtree of t
2. if t is empty and s is non-empty then s cannot be a subtree of t
3. if s is empty and t is non-empty then s is a subtree of t
4. if s and t are the same tree OR t.left and s are the same tree OR t.right and s are the same tree then s is a subtree of t

## Lessons Larned from validPalindrome
A two pointer approach here correctly solves the problem in O(n) time and O(1) space. Although we can use the built-in javascript `replace` function to replace all non-alphanumeric characters with an empty string, we can use our own `isAlhaNumeric` function by looking at each character's ASCII code.  

## Lessons Learned from minStack
Although it is relatively straightforward to create a stack with O(1) time complexity for push, pop and top operations, creating a function `getMin` which runs in O(1) time was challenging. The solution involves using extra memory to store an auxillary stack which keeps track of the "min value so far" for each node in the stack.

## Lessons Learned from climbStairs
This problem can be solved recursively by breaking the problem down into simpler self-similar problems. Let's suppose we have a function, `f` that returns the number of ways to get from 0th step to the nth step.  Since there is only one way to get from the (n-1)th step to the nth step and only one way to get from the (n-2)th step to the nth step we can use the recurrence relation `f(n) = f(n-1) + f(n-2)` to solve the problem. Additionally, we can use memoization to cache the results to expensive `f(n-1)` and `f(n)` calls.

## Lessons Learned from twoSum
We can solve this problem using brute force in O(n^2) time and O(1) space where we check each element in the array with every complement. However, a more optimal solution is to use a hash map where the key is the value seen in the array and the value is the index.  Using a hashmap we can iterate through the array once and check if we've already seen the target's complement. This algorithm will run in O(n) time and also O(n) space. 

## Lessons Learned from mergeSortedLists
This problem can be solved in O(n + m) time where n is len(list1) and m is len(list2). This problem becomes much simpler if we use a dummy node at the start of the linked list so we can guarantee a non-empty list to insert into.

## Lessons Learned from groupAnagrams
This optimal solution runs in O(n * k) time where n is the length of strs and k is the length of the average word in strs. This is because for each word in strs we iterate over each char in word which takes O(nk) time and then we create a unique key using the count array by stringifying it. Since the count array will have a maximum of 26 characters stringifying count will take O(26) time which is O(1).
This problem uses a clever trick of creating a unique hashmap key for each anagram by using an array of 26 elements where each element corresponds to a letter in the anagram. By stringifying the array we can generate a unique has in O(1) time.

## Lessons Learned from topKFrequent
The optimal solution can run in O(n) time if we iterate over all elements to create a hashmap of val -> counts. Then we can iterate over all the keys in the hashmap and transform it into an array which maps count (index) -> val. Since the array is bounded in size -- counts can only be from 1, ... , n we can traverse the array backwards in linear time.
I also learned that `Array.fill([])` should not be used to create 2D arrays as it creates one array and copies it by reference to every element in the array.

## Lessons learned from longestReplacementSubstring
Learned that a sliding window pattern can give us an O(n) runtime. If we use a counts hashmap to store the frequency of characters in the window we can compute how many character we would have to replace. If number of replacements <= k we can make our window larger else we can make the window smaller.

## Lessons learned from permutation
A hashmap of counts for both strings can help us solve this in O(n) time and O(n) space. However, there are many small optimizations one can make. For example, instead of generating a new hash map at every iteration, we can create two hashmaps to start with and only update values in the second hashmap as we "slide" our window. 
Also, instead of looping over all keys of the hashmap to check for a permutation we can maintain a "matches" variable which we constantly update to keep track of how many letters of the alphabet are matches. 

## Lessons from reversePolishNotation
This question can be solved in O(n) time by using a stack to store the numbers remaining to evaluate. A stack is appropiate because the two "most recent" neighbours of an operation are the "first" to be evaluated.

## Lessons from generateParentheses
Using a recursive approach where we make a decision to either add an open paren, closed paren or neither (base case) to the end of our string `soFar` was the approach to solving. The number of parameters to the recursive function can be reduced by declaring the function inside of the outer function. Also, we can use backtracking to reduce the memory complexity.

## Lessons from dailyTemperatures
To solve the "Next Greater Elemment" or "Next Smaller Element" problem we can make use of a `monotonic stack` which stores elements in an non-increasing or non-decreasing order. Elements added to stack are only added once and removed (at most) once so we can solve problems in linear time and linear space.

## Lessons learned from kokoEats
Anytime we can bound our solution range (in increasing order) with a `min` and a `min` we can use binary search to find our solution in O(logn) time.

## Lessons learned from reorderLinkedList
We can complete this in O(n) time and space if we use an auxillary array to store all our nodes and use two pointers to move from the outside in. A clever approach using O(1) space involves finding the middle of the list, reversing the second half and then "stiching" together the left/right lists.

## Lessons learned from removingNthNode
Here we can make two passses through the list if we first find the size of the list.  Or we can keep two pointers with a gap of `n` so we can get access to the "nth from last" node using a single pass. Also, a dummy node really helps here if we are asked to remove a node from the start of the list.

## Lessons learned from copyRandomList
Here we can use a map to keep a mapping of our "original node" to our "copy node". This lets us clone the original list in O(n) space and O(n) time.
However, if we add each "copy node" right after our "original node" we can reference the corresponding copy reference node in O(1) space.

## Lessons learned from implementTrie
Here I learned that we can use a tree data structure to store characters within a string. Although, the insertion and lookup of words can be done in constant time using a hashmap, performing a `startsWith` operation will require O(n) time in the worst case. Prefix trees are extremely efficient at looking for string prefixes allowing us to perform a `startsWith` operation in constant time.

## Lessons learned from Kth Largest Element in Stream
If we have `N` elements in a stream and want to easily be able to find the kth largest element in `log(n)` time we can store the k-largest elements into a heap of size `k`. This guarantees that the min element in the heap of k-largest elements is the kth largest element and we can add/retrieve the kth largest element in `O(logn)` time.

## Lessons learned from clone graph
Here we can use a recursive DFS algorithm with a hashtable to clone a graph. If a node already exists in our hashtable, we can return it (base case). Otherwise we create a new node, add it to our hashtale and iterate over all the old node's neighbors and add the corresponding new nodes.

## Lessons learned from course schedule
A directed graph can be used to describe the ordering in which events (such as course selections) can happen. To detect a deadlock or a cycle in a graph we can use a graph "coloring" technqiue. This involves labelling each node initally as "unvisited". For each node in the graph, we run a DFS on the node and mark it as "processing" and run DFS on all of its neighbors. If we ever encounter another processing node we are in a cycyle. As we run out of neighbors we can mark the nodes as "processed" and backtrack up.

## Lessons learned from combination sum
Backtracking is a technique used to reduce the number of recursive calls made in a decision tree by using a bounding function. For this problem the bounding function checks if the totalSoFar is bigger than the target sum. If so, further recursive calls are not made. This problem is related to the subset problem (inclusion-exclusion) where the left decision subtree includes `candidates[i]` and the right subtree tries to exclude `candidates[i]`.

## Lessons learned from allConstruct
allConstruct is about creating all possible ways to construct `target` given some `wordBank`. Here, a recursive approach involves checking each `word` of the `wordBank` to see if it is a prefix of target. If it is, we can call the function `allConstruct` with the remaining target after prefix has been removed.
In this problem the return value of an empty string is `[[]]` indicating a combination was found and `[]` indicating no combinations were found. As we go up our recursive calls, we take return value of our recursive call and add the current prefix in our stack frame to the start of every element in our 2D array.