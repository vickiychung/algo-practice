// function sortedSquaredArray(array) {
//   let squared = [];

//   array.forEach(num => {
//     squared.push(num ** 2);
//   })

//   squared.sort(function(a, b){return a - b});

//   return squared;
// }

function sortedSquaredArray(array) {
  let sortedSquares = new Array(array.length).fill(0);
  let smallerValueIdx = 0;
  let largerValueIdx = array.length - 1;

  for (let i = array.length - 1; i >= 0; i--) {
    let smallerValue = array[smallerValueIdx];
    let largerValue = array[largerValueIdx];

    if (Math.abs(smallerValue) > Math.abs(largerValue)) {
      sortedSquares[i] = smallerValue ** 2;
      smallerValueIdx++;
    } else {
      sortedSquares[i] = largerValue ** 2;
      largerValueIdx--;
    }
  }

  return sortedSquares;
}

let array = [1, 2, 3, 5, 6, 8, 9];
console.log(sortedSquaredArray(array));
