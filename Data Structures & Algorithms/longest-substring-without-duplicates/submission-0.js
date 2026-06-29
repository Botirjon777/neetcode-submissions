class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0;
        let maxLength = 0;
        let characters = new Map()

        for(let i = 0; i < s.length; i++){
            if(characters.has(s[i]) && characters.get(s[i]) >= left){
                left = characters.get(s[i]) + 1;
            }
            characters.set(s[i], i);
            maxLength = Math.max(maxLength, i - left + 1)
        }

        return maxLength
    }
}
