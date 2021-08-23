function palindromeRearranging(inputString) {
  let count = {};
  
  for (let i = 0; i < inputString.length; i++) {
    let char = inputString[i];
    
    if (!count[char]) count[char] = 0;
    count[char] += 1;
  }
  
  let res = true;
  let countOdd = 0;
  
  Object.values(count).forEach(val => {
    if (val % 2 !== 0) {
      countOdd += 1;
      
      if (countOdd > 1) {
        res = false;
        return;
      }
    }
  })
  
  return res;
}