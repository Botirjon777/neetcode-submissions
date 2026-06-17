class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        const count = {};

        for(const char of s){
            count[char] = (count[char] || 0) + 1;
        }

        for(const char of t){
            count[char] = (count[char] || 0) - 1;
        }

        for(const val of Object.values(count)){
            if(val !== 0) return false;
        }

        return true;
    }
}