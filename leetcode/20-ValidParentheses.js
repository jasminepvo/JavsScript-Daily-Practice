/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    let closeToOpen = {
        ")": "(",
        "}": "{",
        "]": "["
    }

    for (const char of s) {
        if (closeToOpen[char]) {
            if (stack.length > 0 && stack[stack.length-1] === closeToOpen[char]) {
                stack.pop()
            } else {
                return false
            }
        } else {
            stack.push(char)
        }
    }
    return stack.length === 0
}

//Time: O(n)
//Space: O(n)

console.log(isValid("()")) //true
console.log(isValid("()[]{}")); //true
console.log(isValid("(]")); //false
