function reverse(x) {
  if (x === 0 || x < Math.pow(-2, 31) || x > Math.pow(2, 31) - 1) return 0;

  arr = x.toString().split(""); // ["1", "2", "3"]
  let rev = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    rev.push(arr[i]);
  }

  let str = rev.join("");

  if (x < 0) {
    return parseInt(str) * (-1);
  } else {
    return parseInt(str);
  }
};

console.log(reverse(123)); // 321
console.log(reverse(-123)); // -321
console.log(reverse(120)); // 21
console.log(reverse(0)); // 0
