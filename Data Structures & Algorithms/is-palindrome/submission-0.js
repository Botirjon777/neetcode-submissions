class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isPalindrome(s) {
        function isAlphanumeric(char){
            return /^[a-z0-9]$/i.test(char)
        }

        let start = 0;
        let end = s.length - 1;

        while(start < end){
            if(!isAlphanumeric(s[start])){ 
                start++ 
                continue
            }
            if(!isAlphanumeric(s[end])){
                end-- 
                continue
            } 

            if(s[start].toLowerCase() !== s[end].toLowerCase()){
                return false    
            }else{
                start++
                end--
            }
        }

        return true
    }
}
