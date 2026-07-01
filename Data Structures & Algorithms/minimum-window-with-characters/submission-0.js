class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let freqT = new Map();
        for(const c of t){
            freqT.set(c, (freqT.get(c) || 0) + 1);
        }
        let freqS = new Map();
        let need = freqT.size;
        let have = 0;
        let left = 0;
        let result = "";

        for(let right = 0; right < s.length; right++){
            freqS.set(s[right], (freqS.get(s[right]) || 0) + 1);
            if(freqT.has(s[right]) && (freqS.get(s[right]) === freqT.get(s[right]))){
                have++
            }

            while(have === need){
                if(s.slice(left, right + 1).length < result.length || result === ""){
                    result = s.slice(left, right + 1);
                }
                
                freqS.set(s[left], freqS.get(s[left]) - 1);

                if(freqT.has(s[left]) && freqS.get(s[left]) < freqT.get(s[left])){
                    have--;
                }

                left++
            }
        }

        return result;
    }
}
