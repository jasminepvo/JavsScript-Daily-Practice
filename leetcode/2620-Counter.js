//Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

/**
 * @param {number} n
 * @return {Function} counter
 */
// param number n
// return counter function which will increment count + 1 every time it is called
// example const counter = createCounter(10) 
// counter() //10
// counter() //11
// counter() //12

//create a function counter() that returns a function createCounter(param)
//createCounter() function will return count + 1

const createCounter = (n) => {
     return () => n++   
}

createCounter(10)

 //Time: O(1)
 //Space: O(1)

const counter = createCounter(10);
console.log([counter(), counter(), counter()]); // Output: [10, 11, 12]
