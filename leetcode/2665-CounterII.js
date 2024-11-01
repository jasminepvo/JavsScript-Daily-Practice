/*
Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.
*/

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    //store the count with initial value of init
    //method to increment = init++ or init +1
    //method to reset = init
    //method to decrement = init--

    let count = init;

    return {
        increment: () => ++count,
        reset: () => (count = init),
        decrement: () => --count,
    }
};

const counter = createCounter(5)
console.log(counter.increment()); // 6
console.log(counter.reset()) // 5
console.log(counter.decrement()) // 4
 
 //Time: O(1)
 //Space: O(1)