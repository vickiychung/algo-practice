// function checkPermutation(str1, str2) {
//   if (str1.length !== str2.length) return false;

//   let count = {}, res = true;

//   for (let i = 0; i < str1.length; i++) {
//     if (!count[str1[i]]) count[str1[i]] = 0;
//     count[str1[i]] += 1;
//   }

//   for (let j = 0; j < str2.length; j++) {
//     if (count[str2[j]]) {
//       count[str2[j]] -= 1;
//     } else {
//       res = false;
//     }
//   }

//   let filtered = Object.values(count).filter(val => val !== 0);
//   if (filtered.length !== 0) res = false;

//   return res;
// }

function checkPermutation(str1, str2) {
  if (str1.length !== str2.length) return false;
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

console.log(checkPermutation("abcd", "dbca")); // true
console.log(checkPermutation("dbca", "abcd")); // true
console.log(checkPermutation("abcd", "aabc")); // false
console.log(checkPermutation("aabc", "abcd")); // false