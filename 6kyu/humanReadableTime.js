/*
    Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

    HH = hours, padded to 2 digits, range: 00 - 99
    MM = minutes, padded to 2 digits, range: 00 - 59
    SS = seconds, padded to 2 digits, range: 00 - 59

    The maximum time never exceeds 359999 (99:59:59)

    You can find some examples in the test fixtures.

*/
function humanReadable (seconds) {
    const SEC_IN_HOUR = 3600
    const SEC_IN_MIN = 60
    let time = ''
    if (seconds >= SEC_IN_HOUR) {
      let hours = Math.floor(seconds/SEC_IN_HOUR)
      if (hours < 10) {
        time += '0'
      } 
      time += hours.toString() 
      seconds = seconds - hours * 3600
    }
    else {
      time += '00'
    } 
    
    if (seconds >= SEC_IN_MIN) {
      let minutes = Math.floor(seconds/SEC_IN_MIN)
      if (minutes < 10) {
        time += ':0'
        time += minutes.toString() 
      } else {
        time += ':' + minutes.toString()
      }
      seconds = seconds - minutes * 60
    }
    else {
      time += ':00'
    }
    
    if (seconds < 10) {
      time += ':0'
      time += seconds.toString()
    } else {
      time += ':' + seconds.toString()
    }
    return time;
  }