class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let start = 0;
        let end = numbers.length - 1;

        while(start < end){
            let sum = numbers[start] + numbers[end]
            if(sum > target){
                end--;
            }else if(sum < target){
                start++;
            }else{
                return [start + 1, end + 1]
            }
        }
    }
}
