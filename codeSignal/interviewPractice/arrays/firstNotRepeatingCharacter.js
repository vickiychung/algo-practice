function firstNotRepeatingCharacter(s) {
  let count = {};
  
  s.split('').forEach(char => {
    if (!count[char]) count[char] = 0;
    count[char] += 1;
  })
  
  let filtered = Object.keys(count).filter(key => count[key] === 1);
  
  if (filtered.length === 0) {
    return '_';
  } else {
    return filtered[0];
  }
}