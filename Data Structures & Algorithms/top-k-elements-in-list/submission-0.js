class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = new Map();

        const bucket = Array.from({length: nums.length + 1}, () => [])

        for(const num of nums){
            freq.set(num, (freq.get(num) || 0) + 1)
        }

        for(const [num, count] of freq){
            bucket[count].push(num)
        }

        const result = [];

        for(let i = bucket.length - 1; i >= 0; i--){
            for(const num of bucket[i]){
                result.push(num);
                if (result.length === k) return result;
            }
        }

        return result
    }
}
