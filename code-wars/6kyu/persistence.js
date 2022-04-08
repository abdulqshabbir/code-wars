function persistence(num) {
   return persistenceRecurse(num, 0)
 }
 
 function persistenceRecurse(num, p) {
   console.log(num, p)
   // base case
   if (num < 10) return p
   
   // recursive step
   const nums = num.toString().split("").map(c => parseInt(c))
   
   const product = nums.reduce((acc, num) => acc*num, 1)
   
   return persistenceRecurse(product, p + 1)
 }