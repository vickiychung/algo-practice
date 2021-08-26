function isIPv4Address(inputString) {
  const arr = inputString.split('.');
  const digits = '1234567890'.split('');
  
  if (arr.length !== 4) return false;
  
  let res = true;
  
  arr.forEach(num => {
    if (num === '') {
      res = false;
      return;
    }
    
    if (num.length > 1 && num[0] === '0') {
      res = false;
      return;
    }
    
    const parsed = Number(num);
    
    if (parsed === 0 && num.length > 1) {
      res = false;
      return;
    }
    
    if (!Number.isInteger(parsed) || parsed < 0 || parsed > 255) {
      res = false;
      return;
    }
  })
  
  return res;
}