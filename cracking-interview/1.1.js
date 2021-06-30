function isUnique(str) {
  if (str.length === 1) return true;

  let arr = [str[0]], res = true;

  for (let i = 1; i < str.length; i++) {
    if (arr.includes(str[i])) {
      res = false;
      break;
    } else {
      arr.push(str[i]);
    }
  }

  return res;
}

console.log(isUnique("notunique"));
console.log(isUnique("yes"));