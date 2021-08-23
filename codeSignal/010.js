function commonCharacterCount(s1, s2) {
  let count1 = {};
  
  for (let i = 0; i < s1.length; i++) {
    if (!count1[s1[i]]) count1[s1[i]] = 0;
    count1[s1[i]] += 1;
  }
  
  let count2 = {};
  
  for (let i = 0; i < s2.length; i++) {
    if (count1[s2[i]]) {
      if (!count2[s2[i]]) count2[s2[i]] = 0;
      count2[s2[i]] += 1;
    }
  }
  
  let commonCount = 0;
  
  Object.keys(count1).forEach(key => {
    let count = Math.min(count1[key], count2[key]);
    if (count) commonCount += count;
  })
  
  return commonCount;
}