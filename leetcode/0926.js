var minFlipsMonoIncr = function(s) {
  let min = Infinity;
  
  let leftIdx = s.indexOf('1');
  let left = s.split('').slice(0, leftIdx).join('');
  let right = s.split('').slice(leftIdx).join('');
  let count = 0;
  
  for (let i = 0; i < left.length; i++) {
    if (left[i] !== '0') count += 1;
  }
  
  for (let i = 0; i < right.length; i++) {
    if (right[i] !== '1') count += 1;
  }
  
  if (count < min) min = count;
 
  let charCount = {
    '0': 0,
    '1': 0
  };
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '0') charCount['0'] += 1;
    if (s[i] === '1') charCount['1'] += 1;
  }
  
  let diff = charCount['0'] > charCount['1'] ? charCount['1'] : charCount['0'];
  
  if (charCount['0'] === charCount['1']) {
    return min;
  } else {
    return min < diff ? min : diff;
  }
};