// Input: prices = [7,1,5,3,6,4]
// Output: 5

function maxProfit(prices: number[]): number {
  let profit = 0
  let buyPrice = prices[0]
  let sellPrice = 0

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < buyPrice) {
      buyPrice = prices[i]
      sellPrice = prices[i]
    }
    if (sellPrice < prices[i]) {
      sellPrice = prices[i]
    }
    if (profit < sellPrice - buyPrice) {
      profit = sellPrice - buyPrice
    }
  }

  return profit
}

// maxProfit([7, 1, 5, 3, 6, 4])
maxProfit([3, 3, 5, 0, 0, 3, 1, 4])
// maxProfit([7, 6, 4, 3, 1])

export {}
