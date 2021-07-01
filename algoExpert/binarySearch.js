function binarySearch(array, target) {
  if (array.length === 0) return -1;

  let mid = Math.floor(array.length / 2);

  if (array[mid] === target) {
    return mid;
  } else if (array[mid] > target) {
    return binarySearch(array.slice(0, mid), target);
  } else {
    let subResult = binarySearch(array.slice(mid + 1), target);
    return subResult === -1 ? -1 : subResult + mid + 1;
  }
}

array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73];
target = 100;

console.log(binarySearch(array, target));
