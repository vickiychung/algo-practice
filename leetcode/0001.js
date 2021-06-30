// function twoSum (nums, target) {
//   let first, second;

//   nums.forEach((num, i) => {
//     let remain = target - num;

//     if (nums.slice(i+1).includes(remain)) {
//       first = i;
//       second = nums.slice(i+1).indexOf(remain) + i + 1;
//     }
//   })

//   return [first, second];
// }

function twoSum(nums, target) {
  let hash = {}, res = [];

  nums.forEach((num, i) => {
    let diff = target - num;

    if (hash.hasOwnProperty(`${diff}`)) {
      res.push(i);
      res.push(hash[diff]);
    } else {
      hash[num] = i;
    }
  })

  return res;
}

console.log(twoSum([2, 7, 11, 15], 9));