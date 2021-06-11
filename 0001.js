function twoSum (nums, target) {
  let first, second;

  nums.forEach((num, i) => {
    let remain = target - num;

    if (nums.slice(i+1).includes(remain)) {
      first = i;
      second = nums.slice(i+1).indexOf(remain) + i + 1;
    }
  })

  return [first, second];
}
