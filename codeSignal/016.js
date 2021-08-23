function areSimilar(a, b) {
  let count = 0;
  
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      if (count > 0) return false;
      
      if (a[i] === b[i+1] && a[i+1] === b[i]) {
        count += 1;
        i++;
      } else {
        return false;
      }
    }
  }
  
  if (count <= 1) return true;
}