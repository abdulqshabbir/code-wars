// O(n) time and O(n) space

var dailyTemperatures = function(temperatures) {
    const result = new Array(temperatures.length).fill(0)
	const stack = []

	for (let i = 0; i < temperatures.length; i++) {
		let temp1 = temperatures[i]

		while (stack.length !== 0 && temp1 > stack[stack.length - 1].temp) {
			const { idx } = stack.pop()
			result[idx] = i - idx
		}

		stack.push({ temp: temp1, idx: i })
	}

	return result
};