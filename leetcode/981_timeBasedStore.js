
var TimeMap = function() {
    this.map = {}
};

TimeMap.prototype.set = function(key, value, timestamp) {
    if (key in this.map) {
        this.map[key].push([value, timestamp])
    } else {
        this.map[key] = [[value, timestamp]]
    }
};


TimeMap.prototype.get = function(key, timestamp) {
    if (!(key in this.map)) return ""
    
    let l = 0
    let r = this.map[key].length - 1
    let valueTimeTuples = this.map[key]
    
    let result = ""
    
    while (l <= r) {
        let mid = Math.floor((l + r)/2)
        
        if (valueTimeTuples[mid][1] <= timestamp) {
            result = valueTimeTuples[mid][0]
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
    return result
    
};