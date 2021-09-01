function simplifyPath(path) {
  if (path.length <= 1) return '/';
  
  let output = '/';
  let arr = path.split('/');
  
  arr.forEach((path, i) => {
    if (path !== '' && path !== '.' && path !== '..') {
      output += path;
      output += '/';
    } else if (path === '..') {
      let prevLength = arr[i - 1].length;
      output = output.substring(0, output.length - 1 - prevLength);
    } 
    
    if (output.length <= 1) output = '/';
  })
  
  if (output.length > 1 && output[output.length - 1] === '/') {
    output = output.substring(0, output.length - 1);
  }
  
  return output;
}