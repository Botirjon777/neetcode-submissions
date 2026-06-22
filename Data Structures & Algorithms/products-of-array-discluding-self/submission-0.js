class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const left = [];
        const right = [];
        const result = [];
        let product = 1;
        
        for(let i = 0; i < nums.length; i++){
            left[i] = product;
            product *= nums[i];
        }

        product = 1;

        for(let i = nums.length - 1; i >= 0; i--){
            right[i] = product;
            product *= nums[i];
        }

        for(let i = 0; i < nums.length; i++){
            let res = left[i] * right[i];
            result.push(res);
        }

        return result;
    }
}
