class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let start = 0;
        let end = heights.length - 1;
        let water = 0;

        while(start < end){
            let width = end - start;
            let height = Math.min(heights[start], heights[end]);
            let product = width * height
            if(product > water){
                water = product
            }
            if(heights[start] < heights[end]){
                start++
            }else{
                end--
            }
        }

        return water;
    }
}
