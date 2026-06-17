class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagrams = new Map();

        for(const str of strs){
            const key = str.split("").sort().join("");

            if(anagrams.has(key)){
                anagrams.get(key).push(str)
            }else{
                anagrams.set(key, [str])
            }
        }

        return Array.from(anagrams.values());
    }
}
