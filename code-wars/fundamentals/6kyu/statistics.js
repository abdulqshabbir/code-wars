function stat(strg) {
    if (strg === "") return ""
    
    let times = strg.split(", ").map(time => mapStringTimeToSeconds(time))
    
    return `Range: ${range(times)} Average: ${average(times)} Median: ${median(times)}`
  }
  
  function average(lst) {
    let average = Math.floor(lst.reduce((acc, time) => acc + time, 0)/lst.length)
    return mapSecondsToStringTime(average)
  }
  
  function median(lst) {
    let sorted = lst.slice().sort((a, b) => a - b)
    let middle = (sorted.length-1)/2
    let median
    if (sorted.length % 2 === 0) {
      let m1 = sorted[Math.floor(middle)]
      let m2 = sorted[Math.ceil(middle)]
      median = Math.floor((m1 + m2)/2)
      return mapSecondsToStringTime(median)
    } else {
        median = sorted[Math.floor(middle)]
        return mapSecondsToStringTime(median)
    }
  }
  
  function range(lst) {
    let sorted = lst.slice().sort((a, b) => a - b)
    let range = sorted[lst.length-1] - sorted[0]
    return mapSecondsToStringTime(range)
  }
  
  function mapStringTimeToSeconds(str) {
    let [hh, mm, ss] = str.split('|')
    hh = Number(hh)
    mm = Number(mm)
    ss = Number(ss)
    
    return hh*3600 + mm*60 + ss
  }
  
  function mapSecondsToStringTime(sec) {
    const hh = Math.floor(sec/3600).toString()
    sec = sec - hh * 3600
    
    const mm = Math.floor(sec/60).toString()
    sec = sec - mm * 60
    sec = sec.toString()
    
    return padZeros(hh) + "|" + padZeros(mm) + "|" + padZeros(sec)
  }
  
  function padZeros(numString) {
    // num will be zero or a positive integer as string
    if (numString.length === 1) return "0" + numString
    return numString 
  }