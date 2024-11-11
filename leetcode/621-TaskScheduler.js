/*
You are given an array of CPU tasks, each labeled with a letter from A to Z, and a number n. Each CPU interval can be idle or allow the completion of one task. Tasks can be completed in any order, but there's a constraint: there has to be a gap of at least n intervals between two tasks with the same label.

Return the minimum number of CPU intervals required to complete all tasks.
*/

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    //intialize task count to count the tasks
    let taskCount = new Map();
    
    //for each task in tasks, set the map to task: taskCount
    //taskcount.get will get the task until it is 0
    //+1 will increment the loop
    //so {"A": 3}, {"B": 3}
    for (let task of tasks) {
        taskCount.set(task, (taskCount.get(task) || 0) +1)
    }

    //intiialize a max heap
    //add the values of the count and sort in descending order
    //so {"A": 3}, {"B": 3}
    //this way we can start with A first so that we're completing the tasks in the quickest way since we have an interval period
    let maxHeap = [...taskCount.values()].sort( (a,b) => b-a)
    //intialize a queue to store the task in if we encounter the interal period
    let queue = []
    //intialize intervals to 0
    let intervals = 0

    while(maxHeap.length > 0 || queue.length > 0) {
        //keep adding to the interval until we run out of maxHeap or queue
        intervals++;
        if(maxHeap.length > 0) {
            //remove the first element from the array (so A)
            let currentTaskFreq = maxHeap.shift() - 1

            //say A: 3, then we're gonna push A to the queue and the interval + n. so it would look like A, 0+2
            //this is how were gonna keep track of intervals until we can use A again
            if(currentTaskFreq > 0) {
                queue.push([currentTaskFreq, intervals + n])
            }
        }
        //take from the queue and push to the heap if ?
        if(queue.length > 0 && queue[0][1] === intervals) {
            maxHeap.push(queue.shift()[0])
            maxHeap.sort( (a,b) => b-a )
        }
    }
    return intervals
};

/*
Input: ["A","A","A","B","B","B"]

taskCount = {"A": 3}, {"B": 3}
maxHeap = [3, 3] //Represents "A" with 3 counts, "B" with 3 counts
queue = []
intervals = 0

1st iteration:
intervals = 1
currentTaskFreq = 3 - 1 = 2 //Remove 3(freq of "A") from maxHeap -> left with 2 after decrementing
queue = [ [2, 3] ] //since currentTaskFreq > 0, add "A" to queue with its cooldown time. So task "A" with frequency 2, can be readded at interval 3

end of iteration:
maxHeap = [3]
queue = [ [2,3] ]
intervals = 1

-------------------

2nd iteration:
intervals = 2
currentTaskFreq = 3-1 = 2
queue = [ [2, 3], [2, 4] ] //freq of b is now 2, can be readded at interval 4

end of iteration:
maxHeap = []
queue = [ [2, 3], [2, 4] ]
intervals = 2

-------------------

3rd iteration
intervals = 3
since maxHeap is empty, now check queue length
queue length is 2 which is greater then 0
check if queue[0][1] === intervals -> [2,3] === intervals (3 === 3)
push A back to maxHeap with the frequency

end of iteration:
maxHeap = [2]
queue = [ [2, 4]]
intervals = 3

-------------------

4th iteration
intervals = 4
currentTaskFreq = 2-1 = 1 //maxHeap "A" is 2, -1 = 1 freq
queue = [ [2, 4], [1, 6]] //add "A" at freq of 1, can be readded at interval 6 (4+2)

since queue [2, 4] matches interval 4 -> move "B" back to maxHeap with frequency

end of iteration:
maxHeap = [2]
queue = [ [1, 6] ]
intervals = 4

-------------------

5th iteration
intervals = 5
currentTaskFreq = 2-1 = 1 //maxHeap "B" is 2, -1 = 1 freq
queue = [ [1, 7], [1, 6] ]

end of iteration:
maxHeap = []
queue = [ [1, 6], [1, 7] ] -> sorted 
intervals = 5

-------------------

6th iteration
intervals = 6
currentTaskFreq = 1-1 = 0 //maxHeap is 0
queue = [ [1, 6], [1, 7] ]

since queue [1, 6] matches interval 6 -> move "A" back to maxHeap with frequency

end of iteration:
maxHeap = [1]
queue = [ [1, 7] ]
intervals = 6

-------------------

7th iteration
intervals = 7
queue = [ [1, 7] ]

since queue [1, 7] matches interval 7 -> move "B" back to maxHeap with frequency

end of iteration:
maxHeap = [1]
queue = []
intervals = 7

-------------------

8th iteration
maxHeap = []
queue = []

both length of maxHeap and queue is empty, exit loop

intervals = 8

*/

console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 2)) //8