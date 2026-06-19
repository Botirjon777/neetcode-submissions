class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded_string = "";
        for(const str of strs){
            encoded_string += `${str.length}#${str}`
        }
        return encoded_string;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const decoded_strs = [];
        let i = 0;

        while(i < str.length){
            let j = str.indexOf("#", i);
            const length = parseInt(str.substring(i, j));
            const word = str.substring(j+1, j+1+length);
            decoded_strs.push(word)
            i = j + 1 + length;
        }
    
        return decoded_strs
    }
}
