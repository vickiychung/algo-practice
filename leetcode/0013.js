function romanToInt(s) {
  const hash = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
  let arr = s.split('');
  let result = 0;

  if (s.length === 1) return hash[s];

  for (let i = 0; i < arr.length; i++) {
    let curr = hash[arr[i]];
    let next = hash[arr[i + 1]];

    if (!next) {
      result += curr;
    } else if (next && curr >= next) {
      result += curr;
    }
  }

  return result;
}

console.log(romanToInt("III")); // 3
console.log(romanToInt("IV")); // 4
console.log(romanToInt("IX")); // 9
console.log(romanToInt("LVIII")); // 58
console.log(romanToInt("MCMXCIV")); // 1994
