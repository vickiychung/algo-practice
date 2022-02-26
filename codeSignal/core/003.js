function solution(n, m) {
  candyPerChild = Math.floor(m/n);
  return candyPerChild * n;
}