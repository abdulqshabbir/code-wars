/*
    isRunning => private property on state

    start -> starts stopwatch if stopped else error
        -public method read only

    stop -> stops stopwatch if started else error
        - public method read only

    reset -> resets stopwatch to default state
        - public method read only

    duration -> computes duration between start and stop
        -public method
        - should not be writable only readable
*/

function StopWatch() {
    let isRunning = false
    let startTime = 0
    let stopTime = 0
    let timeDiff = 0

    Object.defineProperty(this, 'duration', {
        get: () => {
            if (timeDiff !== 0) {
                return timeDiff
            } else {
                throw new Error("You haven't started and stopped your watch!")
            }
        }
    })

    this.start = function () {
        if (isRunning) {
            throw new Error("Stopwatch has already started")
        } else {
            isRunning = true
            startTime = new Date()
        }
    }
    this.stop = function() {
        if (!isRunning) {
            throw new Error("Stopwatch has not yet been started")
        } else {
            isRunning = false
            stopTime = new Date()
            timeDiff = (stopTime - startTime)/1000
        }
    }
    this.reset = function() {
        isRunning = false
        startTime = 0
        stopTime = 0
        timeDiff = 0
    }
}

function MakeStreetFighter(name, age, special, combo) {
    this.name = name
    this.age = age
    this.special = special
    this.combo = combo

    this.speak = function() {
        console.log("I am " + this.name)
    }
    this.useSpecial = function() {
        console.log("here's my special " + this.special)
    }
}