function shapeArea(n) {
  if (n === 1) return 1;
  
  let prev = shapeArea(n-1);
  
  return 4*(n-1) + prev;
}