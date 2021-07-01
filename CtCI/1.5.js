function oneAway(str1, str2) {
  let count = {};

  for (let i = 0; i < str1.length; i++) {
    if (!count[str1[i]]) count[str1[i]] = 0;
    count[str1[i]] += 1;
  }

  for (let j = 0; j < str2.length; j++) {
    if (!count[str2[j]]) count[str2[j]] = 0;
    count[str2[j]] -= 1;
  }

  if (str1.length !== str2.length) {
    let filtered = Object.values(count).filter(val => val !== 0);
    return filtered.length === 1;
  } else {
    let pos = Object.values(count).filter(val => val > 0);
    let neg = Object.values(count).filter(val => val < 0);
    return pos.length === 1 && neg.length === 1;
  }
}

console.log(oneAway("pale", "ple")) // true
console.log(oneAway("pales", "pale")) // true
console.log(oneAway("pale", "bale")) // true
console.log(oneAway("pale", "bake")) // false