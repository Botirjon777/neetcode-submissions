class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);
        let largest = 0;
        for(const num of nums){
            if(!numSet.has(num - 1)){
                let length = 1;
                while(numSet.has(num + length)){
                    length++;
                }
                if(length > largest) largest = length;
            }
        }

        return largest
    }
}
