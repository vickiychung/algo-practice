function solution(min1, min2_10, min11, s) {
  let min = 0;
  
  if (s >= min1) {
    s -= min1;
    min += 1;
  }
  
  while (1 <= min && min < 10 && s > 0) {
    if (s - min2_10 >= 0) {
      s -= min2_10;
      min += 1;
    } else {
      break;
    }
  }
  
  while (min >= 10 && s > 0) {
    if (s - min11 >= 0) {
      s -= min11;
      min += 1;
    } else {
      break;
    }
  }
  
  return min;
}
