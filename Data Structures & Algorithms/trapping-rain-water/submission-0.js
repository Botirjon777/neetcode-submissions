class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = 0;
        let right = height.length - 1;
        let maxLeft = 0;
        let maxRight = 0;
        let result = 0;

        while(left <= right){
            if(maxLeft < maxRight){
                result += Math.max(0, maxLeft - height[left]);
                maxLeft = Math.max(maxLeft, height[left]);
                left++
            }else{
                result += Math.max(0, maxRight - height[right]);
                maxRight = Math.max(maxRight, height[right]);
                right--
            }
 
        }
        return result
    }
}
