function allLongestStrings(inputArray) {
  let max = 1;
  let output = [];
  
  inputArray.forEach(str => {
    if (str.length === max) {
      output.push(str);
    } else if (str.length > max) {
      max = str.length;
      output = [str];
    }
  })
  
  return output;
}