var minFlipsMonoIncr = function(s) {
  let flipZero = 0; 
  let flipOne = 0;
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '0') {
      flipZero = Math.min(flipZero + 1, flipOne);
    } else {
      flipOne += 1
    }
  }
  
  return Math.min(flipZero, flipOne);
};