function reverseInParentheses(inputString) {
  let closeIdx = inputString.indexOf(')');
  
  while (closeIdx !== -1) {
    let openIdx = inputString.substring(0, closeIdx).lastIndexOf('(');
    let left = inputString.substring(0, openIdx);
    let reversed = inputString.substring(openIdx + 1, closeIdx).split('').reverse().join('');
    let right = inputString.substring(closeIdx + 1);
    inputString = left + reversed + right;
    closeIdx = inputString.indexOf(')');
  }
  
  return inputString;
}