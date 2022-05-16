var carFleet = function(target, position, speed) {
    let cars = position.map((pos, i) => {
        return [pos, speed[i]] 
    })
    
    cars.sort((a, b) => a[0] - b[0])
    
    let stack = []
    
    for (let i= cars.length - 1; i >= 0; i--) {
        let timeCurr = (target - cars[i][0])/cars[i][1]
        if (stack.length !== 0) {
            let nextCar = stack[stack.length -1]
            let nextTime = (target - nextCar[0])/nextCar[1] 
            if (nextTime >= timeCurr) { 
                // curr car will catch up to nextCar
                // curr car will slow down to nextCar's speed
                // do nothing here
            } else {
                // nextTime < timeCurr
                // current car will not catch up to nextCar
                stack.push(cars[i])
            }
        } else {
            stack.push(cars[i])
        }
    }
    return stack.length
};