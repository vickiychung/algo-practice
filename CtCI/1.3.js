function URLify(str, length) {
  let arr = str.split(" ");
  let newArr = [], sum = 0;

  while (sum < length) {
    let newStr = arr.shift();

    if (newStr) {
      sum += newStr.length;
      newArr.push(newStr);
    } else {
      break;
    }
  }

  return newArr.join("%20");
}

console.log(URLify("Mr John Smith  ", 13));