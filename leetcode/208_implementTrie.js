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
            console.log("key", key)
            let next = current.keys.get(key)
            printRecurse(next, stringSoFar + key)
        }
    }
    printRecurse()
    return result
}

Trie.prototype.insert = function(word) {
    let chars = word.split("")
    let root = this.root
    function insertRecurse(idx = 0, current = root) {
        let char = chars[idx]
        if (idx === chars.length) {
            return
        }
        else if (!current.keys.has(char)) {
            // char not in Trie
            let newNode = new TrieNode()
            // mark node as terminal if necessary
            if (idx === chars.length - 1) newNode.isEnd = true
            // add char to keys of current node
            current.keys.set(char, newNode)
            // move down trie
            current = current.keys.get(char)
            insertRecurse(idx + 1, current)
        } else {
            // char already in Trie
            current = current.keys.get(char)
            if (idx === chars.length - 1) current.isEnd = true
            insertRecurse(idx + 1, current)
        }
    }
    insertRecurse()
};

Trie.prototype.search = function(word) {
    let current = this.root
    function searchRecurse(current, idx) {
        if (idx === word.length) {
            if (current.isEnd) {
                return true
            } else {
                return false
            }
        } else if (!current.keys.has(word[idx])) {
            return false
        } else {
            current = current.keys.get(word[idx])
            if (!current) return false
            return searchRecurse(current, idx + 1)
        }
    }
    return searchRecurse(current, 0)
};

Trie.prototype.startsWith = function(prefix) {
    function startsWithRecurse(current, idx) {
        if (idx === prefix.length) {
            return true
        } else if (!current.keys.has(prefix[idx])) {
            return false
        } else {
            current = current.keys.get(prefix[idx])
            return startsWithRecurse(current, idx + 1)
        }
    }
    return startsWithRecurse(this.root, 0)
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */