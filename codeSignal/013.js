function reverseInParentheses(inputString) {
  let arr = inputString.split('');
  
  let left = arr.indexOf('(');
  let right = left + arr.slice(left + 1).indexOf(')') + 1;
  let subArr = arr.slice(left + 1, right);
  
  arr.splice(left, subArr.length + 2);
  subArr = subArr.reverse();
  arr = arr.slice(0, left).concat(subArr).concat(arr.slice(left));
  
  return arr.join('');
}