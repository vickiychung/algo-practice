function areSimilar(a, b) {
  let count = 0;
  let tempA = null; 
  let tempB = null;
  
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      if (count > 0) {
        return false;
      } else if (tempA && tempB) {
        if (a[i] === tempB && b[i] === tempA) {
          count += 1;
          tempA = null;
          tempB = null;
        } else {
          return false;
        }
      } else {
        tempA = a[i];
        tempB = b[i];
      }
    }
  }
  
  return true;
}