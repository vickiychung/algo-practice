function twoSum (nums, target) {
  let first, second;

  nums.forEach((num, i) => {
    let remain = target - num;

    if (nums.slice(i+1).includes(remain)) {
      first = i;
      second = nums.indexOf(remain);
    }
  })

  return [first, second];
}
