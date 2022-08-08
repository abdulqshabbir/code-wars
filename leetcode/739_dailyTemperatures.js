var dailyTemperatures = function(temperatures) {
    const monoStack = []
    const answer = new Array(temperatures.length).fill(0)
    
    for (let [idx, temp] of temperatures.entries()) {
        if (monoStack.length === 0 || temp <= monoStack[monoStack.length -1][0]) {
            monoStack.push([temp, idx])
        }
        else {
            while (monoStack.length > 0 && temp > monoStack[monoStack.length-1][0]) {
                const [pastTemp, pastIdx] = monoStack.pop()
                answer[pastIdx] = idx - pastIdx
            }
            monoStack.push([temp, idx])
        }
    }
    return answer
};