/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // [DEFINE]: Initial profit
  let profit = 0;
  // [DEFINE]: Initial buyPrice
  let buyPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
      // [CASE]: If current buyPrice is greater than the current price, update
      if (buyPrice > prices[i]) {
          // [STEP]: Update buyPrice to the lower price
          buyPrice = prices[i]
      }

      // [DEFINE]: Current profit
      let current = prices[i] - buyPrice;
      // [CASE]: If current profit it greater than record profit
      if (current > profit) {
          // [STEP]: Update record profit to current profit
          profit = current;
      }
  }
  return profit;
};