/*
Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
*/

/**
 * @param {string} val
 * @return {Object}
 */
const expect = (val) => {
    return {
        toBe: (otherVal) => (val === otherVal) ? true : ( () => { throw new Error("Not Equal"); })(), 
        notToBe: (otherVal) => (val !== otherVal) ? true : ( () => { throw new Error("Equal"); })()
    }
};

try {
  console.log(expect(5).toBe(5)); // true
} catch (error) {
  console.error(error.message);
}

try {
  console.log(expect(5).notToBe(5)); // throws "Equal"
} catch (error) {
  console.error(error.message);
}

//Time: O(1)
//Space: O(1)