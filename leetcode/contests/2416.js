class PrefixTreeNode {
    constructor(char, val) {
       this.children = {}
       this.char = char
       this.val = val ?? 1
    }
    setChild(char) {
        this.children[char] = new PrefixTreeNode()
    }
    getChild(char) {
        return this.children[char] ?? null
    }
    increment() {
       this.val++
    }
}
    
class PrefixTree {
    constructor() {
        this.root = new PrefixTreeNode(null)
    }
    print() {
        return JSON.stringify(this.root, null, 2)
    }
}

var sumPrefixScores = function(words) {
    let t = new PrefixTree()
    
    for (let word of words) {
        let curr = t.root
        for (let char of word) {
            if (curr.getChild(char) === null) {
                curr.setChild(char)
                curr = curr.getChild(char)
            } else {
                curr = curr.getChild(char)
                curr.increment()
            }
        }
    }
    const answer = new Array(words.length).fill(0)
    for (let i = 0; i < answer.length; i++) {
        let word = words[i]
        let sum = 0
        let curr = t.root
        for (let char of word) {
            curr = curr.getChild(char)
            sum += curr.val
        }
        answer[i] = sum
    }
    return answer
};