const minChange = (amount, coins) => {
  const ans = _minChange(amount, coins);
  return ans === Infinity ? -1 : ans;
};

const _minChange = (amount, coins, memo = {}) => {
  if (amount === 0) return 0;
  if (amount < 0) return Infinity;
  if (amount in memo) return memo[amount];
  
  let min = Infinity;
  
  for (let coin of coins) {
    let count = _minChange(amount - coin, coins, memo) + 1;
    if (count < min) min = count;
  }
  
  memo[amount] = min
  
  return memo[amount];
};