function isPalindrome(x) {
  if (x < 0) return false;
  if (x === 0) return true;

  return x.toString() === x.toString().split('').reverse().join('');
}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
console.log(isPalindrome(-101));
