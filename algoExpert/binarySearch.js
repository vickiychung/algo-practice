function binarySearch(array, target) {
  if (array.length === 1 && array[0] === target) return 0;
  
  let mid = Math.floor(array.length / 2);

  if (array[mid] === target) {
    return mid;
  } else if (array[mid] > target) {
    return binarySearch(array.slice(0, mid), target) + 1;
  } else {
    return binarySearch(array.slice(mid), target) + 1;
  }
}

array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73];
target = 33;

console.log(binarySearch(array, target));