function sortByHeight(a) {
  let heights = [];
  
  a.forEach((ele, i) => {
    if (ele !== -1) heights.push(ele);
  })
  
  heights.sort((a, b) => a - b);
  
  let output = [];
  
  a.forEach(ele => {
    if (ele !== -1) {
      output.push(heights.shift());
    } else {
      output.push(-1);
    }
  })
  
  return output;
}