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