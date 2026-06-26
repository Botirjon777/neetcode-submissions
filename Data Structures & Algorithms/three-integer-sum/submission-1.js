class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sorted = nums.sort((a, b) => a - b);
        const results = []

        for(let i = 0; i < sorted.length; i++){
            if(nums[i] === nums[i - 1]) continue;
            
            let start = i + 1;
            let end = sorted.length - 1;

            while(start < end){
                let sum = (sorted[start] + sorted[end]);

                if(sum === -sorted[i]){
                    results.push([sorted[i], sorted[start], sorted[end]])
                    start++
                    end--
                    while(start < end && sorted[start] === sorted[start - 1]) start++;
                    while(start < end && sorted[end] === sorted[end + 1]) end--;
                }else if(sum > -sorted[i]){
                    end--
                }else{
                    start++
                }
            }
        }

        return results;
    }
}
