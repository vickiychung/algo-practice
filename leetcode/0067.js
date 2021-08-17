var addBinary = function(a, b) {
  a = BigInt(`0b${a}`);
  b = BigInt(`0b${b}`);
  
  return (a + b).toString(2);
};