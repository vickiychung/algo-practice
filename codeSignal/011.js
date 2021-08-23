function isLucky(n) {
  let arr = n.toString().split('');
  let mid = (arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  
  let sumLeft = 0;
  
  left.forEach(ele => {
    sumLeft += parseInt(ele);
  })
  
  right.forEach(ele => {
    sumLeft -= parseInt(ele);
    if (sumLeft < 0) return false;
  })
  
  if (sumLeft === 0) {
    return true;
  } else {
    return false;
  }
}