function simplifyPath(path) {
  if (path.length <= 1) return '/';
  
  let output = [];
  let arr = path.split('/');
  
  arr.forEach(path => {
    if (path !== '' && path !== '.' && path !== '..') {
      output.push(path);
    } else if (path === '..') {
      output.pop();
    }
  })
  
  output = output.join('/');
  output = '/' + output;
  
  return output;
}