function palindromePermutation(str) {
  let newStr = str.split(" ").join("").toLowerCase();
  let count = {};

  for (let i = 0; i < newStr.length; i++) {
    if (!count[newStr[i]]) count[newStr[i]] = 0;
    count[newStr[i]] += 1;
  }

  let filtered = Object.values(count).filter(val => val % 2 !== 0);

  return filtered.length <= 1;
}


console.log(palindromePermutation("Tact Coa")); // true
console.log(palindromePermutation("abc dbca")); // true
console.log(palindromePermutation("abcc dbca")); // false
console.log(palindromePermutation("abccba")); // true