function binarySearch(array, target) {
  // if (array.length <= 1 && target !== array[0]) return -1;
  
  let mid = Math.floor(array.length / 2);

  if (array[mid] === target) {
    return mid;
  } else if (array[mid] > target) {
    let left = array.slice(0, mid);
    if (left.length === 1 && target !== left[0]) {
      return -1;
    } else {
      return binarySearch(left, target);
    }
  } else {
    let right = array.slice(mid + 1);
    if (right.length === 1 && target !== right[0]) {
      return -1;
    } else {
      return binarySearch(right, target) + mid + 1;
    }
  }
}

array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73];
target = 100;

console.log(binarySearch(array, target));