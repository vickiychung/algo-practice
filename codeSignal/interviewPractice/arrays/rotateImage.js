function rotateImage(a) {
  for (let r = a.length - 1; r >= 0; r--) {
    for (let c = 0; c < a.length; c++) {
      let val = a[r].shift(); 
      a[c].push(val); 
    }
  }
  
  return a;
}