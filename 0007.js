function reverse(x) {
  if (x === 0) return 0;

  arr = x.toString().split("");
  let rev = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    rev.push(arr[i]);
  }

  let result = parseInt(rev.join(""));

  if (x < 0 && (result * (-1)) < Math.pow(-2, 31)) {
    return 0;
  } else if (x < 0) {
    return result * (-1);
  } else if (result > Math.pow(2, 31) - 1) {
    return 0;
  } else {
    return result;
  }
};

console.log(reverse(123)); // 321
console.log(reverse(-123)); // -321
console.log(reverse(120)); // 21
console.log(reverse(0)); // 0
