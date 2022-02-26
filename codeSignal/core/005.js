function solution(divisor, bound) {
  let output = Math.floor(bound / divisor);
  return output * divisor;
}