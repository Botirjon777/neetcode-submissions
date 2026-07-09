class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        if(k === 1){
            return nums
        }
        let res = []

        for(let i = 0; i <= nums.length - k; i++){
            
            let max = nums[i];

            for(let j = 1; j < k; j++){
                if(nums[i + j] > max){
                    max = nums[i + j]
                }
            }
            res.push(max)
        }

        return res
    }
}
