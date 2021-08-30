function addBorder(picture) {
  const charLength = picture[0].length;
  
  let border = "";
  
  for (let i = 1; i <= charLength + 2; i++) {
    border += "*";
  }
  
  let output = [border];
  
  picture.forEach(row => {
    let newRow = "*" + row + "*";
    output.push(newRow);
  })
  
  output.push(border);
  
  return output;
}