function solution(n) {
  let hr = Math.floor(n / 60).toString();
  let min = (n - hr * 60).toString();
  let output = 0;
  
  for (let i = 0; i < hr.length; i++) {
    output += parseInt(hr[i]);
  }
  
  for (let j = 0; j < min.length; j++) {
    output += parseInt(min[j]);
  }
  
  return output;
}
