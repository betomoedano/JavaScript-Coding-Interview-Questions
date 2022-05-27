// k numOfWorkers
// array of positive integers


// time O(n(log n)) because we need to sort the array
// space O(n) where n is the number of elements in the tasks array

// greedy algorithm

function taskAssignment(k, tasks) {
    const taskDurationToIndices = getTaskDurationToIndices(tasks);
    const sortedTasks = [...tasks].sort((a, b) => a - b);
    const assigments = [];
    let right = tasks.length - 1;
    let left = 0;
    
    while(left < right) {
        const leftValue = taskDurationToIndices[sortedTasks[left]].pop();
        const rightValue = taskDurationToIndices[sortedTasks[right]].pop()
        assigments.push([leftValue, rightValue])
        left++;
        right--;
    }
  return assigments;
}

function getTaskDurationToIndices(tasks) {
    const taskDurationToIndices = {};
    
    for(let idx in tasks) {
        if(tasks[idx] in taskDurationToIndices) {
            taskDurationToIndices[tasks[idx]].unshift(idx);
        } else {
            taskDurationToIndices[tasks[idx]] = [idx];
        }
    }
    return taskDurationToIndices;
}

const k = 3;
const tasks = [1, 3, 5, 3, 1, 4];

console.log(taskAssignment(k, tasks));