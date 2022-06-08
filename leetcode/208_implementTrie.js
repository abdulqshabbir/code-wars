var TrieNode = function () {
    this.keys = new Map()
    this.isEnd = false
}

var Trie = function() {
    this.root = new TrieNode()
};

Trie.prototype.print = function() {
    let result = []
    let root = this.root

    function printRecurse(current = root, stringSoFar = "") {
        if (current.isEnd) result.push(stringSoFar)
        if (current.keys.size === 0) return

        for (let [key, ] of current.keys.entries()) {
            let next = current.keys.get(key)
            printRecurse(next, stringSoFar + key)
        }
    }
    printRecurse()
    return result
}

Trie.prototype.insert = function(word) {
    let current = this.root

    for (let i = 0; i < word.length; i++) {
        let char = word[i]
        if (current.keys.has(char)) {
            current = current.keys.get(char)
        } else {
            let newNode = new TrieNode()
            current.keys.set(char, newNode)
            current = current.keys.get(char)
        }
    }
    current.isEnd = true
};

Trie.prototype.search = function(word) {
    let current = this.root
    for (let i = 0; i < word.length; i++) {
        let char = word[i]
        if (current.keys.has(char)) {
            current = current.keys.get(char)
        } else {
            return false
        }
    }
    return current.isEnd
};

Trie.prototype.startsWith = function(prefix) {
    let current = this.root
    for (let i = 0; i < prefix.length; i++) {
        let char = prefix[i]
        if (current.keys.has(char)) {
            current = current.keys.get(char)
        } else {
            return false
        }
    }
    return true
};