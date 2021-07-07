function stringCompression(str) {
  let compressed = '';
  let prev = null;
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    let curr = str[i];

    if (prev !== curr) {
      if (i !== 0) {
        compressed += count.toString();
        count = 0;
      }

      compressed += curr;
    } 
    
    count += 1;
    prev = curr;
  }

  compressed += count.toString();

  if (compressed.length === str.length) {
    return str;
  } else {
    return compressed;
  }
}

console.log(stringCompression('aabcccccaaa')); // a2b1c5a3
console.log(stringCompression('aabcccccb')); // a2b1c5b1
console.log(stringCompression('aabbcc')); // aabbcc