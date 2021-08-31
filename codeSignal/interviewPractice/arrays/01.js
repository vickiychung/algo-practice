function firstDuplicate(a) {
  let count = {};
  
  a.forEach((num, i) => {
    if (!count[num]) count[num] = [];
    count[num].push(i);
  })
  
  const duplicateKeys = Object.keys(count).filter(key => count[key].length > 1);
  
  if (duplicateKeys.length === 0) return -1;
  
  let minIdx = Infinity;
  let minKey;
  
  duplicateKeys.forEach(key => {
    let idx = count[key][1];
    if (idx < minIdx) {
      minIdx = idx;
      minKey = key;
    }
  })
  
  return parseInt(minKey);
}
