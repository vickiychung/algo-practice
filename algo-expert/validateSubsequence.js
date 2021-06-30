function isValidSubsequence(array, sequence) {
  // let prev_i = array.indexOf(sequence[0]);
  // let curr_i;

  // for (let i = 1; i < sequence.length; i++) {
  //   curr_i = array.indexOf(sequence[i]);

  //   if (curr_i < prev_i) return false;
  // }

  // return true;

  let i = 0;

  for (let j = 0; j < array.length; j++) {
    if (array[j] === sequence[i]) {
      i += 1;
    }
  }

  return i === sequence.length;
}

let array = [5, 1, 22, 25, 6, -1, 8, 10];
let sequence = [1, 6, -1, 10];

console.log(isValidSubsequence(array, sequence));
