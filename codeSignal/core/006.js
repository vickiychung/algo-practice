function solution(n, firstNumber) {
  let mid = n / 2;
  
  if (firstNumber === mid) {
    return 0;
  } else if (firstNumber < mid) {
    return mid + firstNumber;
  } else {
    return firstNumber - mid;
  }
}
