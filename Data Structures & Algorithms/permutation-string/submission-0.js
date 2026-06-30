class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        function mapsEqual(map1, map2){
            if(map1.size !== map2.size) return false;
            for(const [key, val] of map1){
                if(map2.get(key) !== val) return false;
            }

            return true;
        }

        let freqS1 = new Map();
        for(const s of s1){
            freqS1.set(s, (freqS1.get(s) || 0) + 1)
        }

        let freqS2 = new Map();
        for(let i = 0; i < s1.length; i++){
            freqS2.set(s2[i], (freqS2.get(s2[i]) || 0) + 1);
        }

        if(mapsEqual(freqS1, freqS2)) return true;

        for(let i = s1.length; i < s2.length; i++){
            freqS2.set(s2[i], (freqS2.get(s2[i]) || 0) + 1);
            let leftChar = s2[i - s1.length];
            freqS2.set(leftChar, freqS2.get(leftChar) - 1);

            if(freqS2.get(leftChar) === 0){
                freqS2.delete(leftChar)
            }

            if(mapsEqual(freqS1, freqS2)) return true;
        }

        return false
    }
}
