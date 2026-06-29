class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = prices[0];
        let maxProfit = 0;

        for(let i = 0; i < prices.length; i++){
            if(prices[i] - minPrice > maxProfit){
                maxProfit = Math.max(maxProfit, prices[i] - minPrice);
            }else{
                minPrice = Math.min(minPrice, prices[i])
            }        
        
        }

        return maxProfit
    }
}
