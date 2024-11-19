/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // P - array of prices on the ith day
    // R - max profit that can be made from day x to day x
    // E - [7, 1, 5, 3, 6, 4]
    /*
    Iteration 1: Day 1 - 7
    to  day 2 - 1
    so 1-7 = -6 (loss)

    to day 3 - 5
    so 5-7 = -2 (loss)

    to day 4 - 3
    so 3-7 = -4 (loss)

    to day 5 - 6
    so 6-7 = -1 (loss)

    to day 6 - 4
    so 4-7 = -3 (loss)

    -------------------

    Iteration 2: Day 2 - 1
    to day 3 - 5
    so 5-1 = 4 (gain)

    to day 4 - 3
    so 3-1 = 2 (gain)

    to day 5 - 6
    so 6-1 = 5 (gain)

    to day 6 - 4
    so 4-1 = 3 (gain)

    -------------------

    Iteration 3: Day 3 - 5
    to day 4 - 3
    so 3-5 = -2 (loss)

    to day 5 - 6
    so 6-5 = 1 (gain)

    to day 6 - 4
    so 4-5 = -1 (loss)

    -------------------

    Iteration 4: Day 4 - 3
    to day 5 - 6
    so 6-3 = 3 (gain)

    to day 6 - 4
    so 4-3 = 1 (gain)

    -------------------

    Iteration 5: Day 5 - 6
    to day 6 - 4
    so 4-6 = -2 (loss)

    to day 5 - 6
    so 6-1 = 5 (gain)
    output: 5 is biggest gain!!!!
    */

    //pseudocode 
    //we want to start at the left of the array and create a sliding window till we reach the end of the array
    //we'll take the left pointer and make the next index the right pointer
    //subtract the right pointer from the left pointer and store it in profit
    //then move the right pointer to the next index
    //subtract the right pointer from the left pointer and store it in profit
    //then take the math.max profit
    //then continue to do so until the right pointer reaches the array length
    //then move the left pointer and repeat everything
    //return the max profit 

    let left=0, right=1, maxProfit=0;

    while (right < prices.length) {
        //start at the left and compare index 0 and 1
        if (prices[left] < prices[right]) {
            //profit is price on sell day - price from initial day it was bought
            let profit = prices[right]-prices[left]
            //take the max price between the profit and maxProfit
            maxProfit = Math.max(profit, maxProfit)
        } else {
            //update the left pointer to the right so it can start at the next index
            left = right
        }
        //move the right pointer to the right and continue
        right++
    }
    return maxProfit
};

//Time: O(n)
//Space: O(1)

console.log(maxProfit([7, 1, 5, 3, 6, 4])); //5
console.log(maxProfit([7, 6, 4, 3, 1])); //0