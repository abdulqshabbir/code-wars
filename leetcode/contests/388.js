var lengthLongestPath = function(input) {
    function longestPath(substring, level) {
        if (!substring.includes(".")) {
            return 0
        }
        if (!substring.includes("\n")) {
            if (substring.includes(".")) {
                return substring.length
            } else {
                return 0
            }
        }

        let delimeter = "\n"
        let numOfTabs = 0

        while (numOfTabs < level) {
            delimeter += "\t"
            numOfTabs++
        }

        let maxLength = 0
        let regExp = new RegExp('\\b('+delimeter+')\\b', 'g');
        let root = substring.split(regExp).slice(0, 1)
        let children = substring.split(regExp).slice(1)

        while (children.length === 0) {
            regExp = new RegExp('\\b('+delimeter+')\\b', 'g')
            root = substring.split(regExp)[0]
            children = substring.split(regExp).slice(1)
            delimeter += "\t"
        }

        for (let child of children) {
            const len = root.length + "/".length + longestPath(child, level + 1)
            maxLength = Math.max(len, maxLength)
        }

        return maxLength

    }
    return longestPath(input, 0)
};

console.log(lengthLongestPath("file1.txt\nfile2.txt\nlongfile.txt"))