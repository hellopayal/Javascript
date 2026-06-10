//Group Anagrams
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.



// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

function GroupAnagram(strs) {
    let map = new Map()
    for (let str of strs) {
        let sortedstr = str.split('').sort().join('')

        if (!map.has(sortedstr)) {
            map.set(sortedstr, [])
        }
        map.get(sortedstr).push(str)
    }
    return Array.from(map.values())
}

let strs = ["a"]
console.log(GroupAnagram(strs))