/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */

var leastInterval = function(tasks, n) {
    /*
        
        create a frequencyMap of tasks {task1: count1, ...}
        add each [key, val] in map into array (taskCounts)
        sort taskCounts by count of each task [{"A": 1}, {"B": 2}, {"C": 3}]
        
        completedTasks = {}
        completedArray = []

        res = 0
       
        while completedTasks not the same as frequency map
            t = getMostFreqTask(completedTasks, taskCounts, i)
            if (t !== null) {
                if t in completedTasks
                    increment count
                else
                    add t to completedTasks with a count of 1
            }
            res++

        return res
    */

    /*
        function getMostFreqTask(completedTasks, taskCounts, i) 
            for j from taskCounts.length -1 down to 0:
                {char, count} = taskCounts[i]
                if (char not in completedTaks) OR (count < completedTasks[char])
                    if canComputerDoTask(char, i, completedTasks)
                        return char
            return null
    */

    /*
        function canComputerDoTask(char, i, completedTasks, completedArray, n)
            for j from i-1 down to i-n
                if j is out of bounds
                    return true
                if completedArray[j] === char
                    return false
           
            return true

    */
};