function makeArrayConsecutive2(statues) {
  const sorted = statues.sort((a, b) => a - b);
  let count = 0;
  
  for (let i = 0; i < sorted.length - 1; i++) {
    let curr = sorted[i];
    let next = sorted[i+1];
    let diff = next - curr;
    
    if (diff !== 1) count += (diff - 1);
  }
  
  return count;
}