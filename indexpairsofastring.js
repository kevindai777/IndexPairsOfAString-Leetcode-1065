//Objective is to find the starting and ending indicies of dictionary words
//that appear in a larger string.


//O(n * m * l) where n is the length of the entire text, m is the length of the
//dictionary, and l is the length of the longest substring

let set = new Set(words)
let result = []

for (let i = 0; i < text.length; i++) {
    set.forEach(word => {
        if (text[i] == word[0]) {
            if (text.substring(i, i + word.length) == word) {
                result.push([i, i + word.length - 1])
            }
        }    
    })
}

return result.sort((a,b) => {
    if (a[0] == b[0]) {
        return a[1] - b[1]
    } else {
        return a[0] - b[0]
    }
})