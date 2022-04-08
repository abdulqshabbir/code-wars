function titleCase(title, minorWords) {
    if (title === "") return ""
    return ignoreMinorWords(capitalize(title), minorWords)
  }
  
  function capitalize(str) {
    const words = str.toLowerCase().split(' ')
    
    words.forEach((word, i, arr) => {
      arr[i] = word[0].toUpperCase() + word.substring(1)
    })
    return words.join(' ')
  }
  
  function ignoreMinorWords(str, minorWords) {
    if (!minorWords) return str
    minorWords = minorWords.split(' ').map(w => w.toLowerCase())
    const isMinorWord = (word) => minorWords.indexOf(word.toLowerCase()) >= 0
    const words = 
          str
            .split(' ')
            .map((word, idx) => {
              if (isMinorWord(word.toLowerCase()) && idx !== 0) {
                return word.toLowerCase() 
              }
              return word
            })
    return words.join(' ')
  }
  