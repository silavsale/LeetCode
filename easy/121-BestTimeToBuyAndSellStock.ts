let prices = [7, 1, 5, 3, 6, 4];
// let prices = [7, 6, 4, 3, 1];
let Output = 5;

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices: number[]): number {
  let minVal = prices[0];
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    minVal = Math.min(minVal, prices[i]);
    maxProfit = Math.max(maxProfit, prices[i] - minVal);
  }

  return maxProfit;
};

maxProfit(prices);
