function sortedSquaredArray(array) {
  let squared = [];

  array.forEach(num => {
    squared.push(num ** 2);
  })

  squared.sort(function(a, b){return a - b});

  return squared;
}

let array = [1, 2, 3, 5, 6, 8, 9];
console.log(sortedSquaredArray(array));
