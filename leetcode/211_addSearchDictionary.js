var TrieNode = function() {
    this.children = new Map()
    this.isEnd = false
}

var WordDictionary = function() {
    this.root = new TrieNode()
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let current = this.root
    for (let i = 0; i < word.length; i++) {
        let char = word[i]
        if (!current.children.has(char)) {
            current.children.set(char, new TrieNode())
        }
        current = current.children.get(char)
    }
    current.isEnd = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */

WordDictionary.prototype.search = function(word) {
    let current = this.root  
    
    function dfs(idx, current) {
        let char = word[idx]
        if (idx === word.length) {
            return current.isEnd || char === "."
        } else if (char === ".") {
            for (let child of current.children.values()) {
                if (dfs(idx + 1, child)) {
                    return dfs(idx+1, child)
                } 
            }
            return false
        } else {
            if (!current.children.has(char)) {
                return false 
            } else {
                let child = current.children.get(char)
                return dfs(idx + 1, child)
            }
        }
    }
    
    return dfs(0, current)
};

let d = new WordDictionary()

d.addWord("a")
console.log(d.search("z")) // false 
console.log(d.search("a")) // true
console.log(d.search(".")) // true
console.log(d.search(".a")) // false
console.log(d.search("a.")) // false

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */