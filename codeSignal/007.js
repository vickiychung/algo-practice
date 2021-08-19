function almostIncreasingSequence(sequence) {
  let count = 0
  
  for (let i = 0; i < sequence.length - 1; i++) {
    if (sequence[i] >= sequence[i+1]) count += 1;
    if (count > 1) return false;
    
    if (sequence[i-1] >= sequence[i+1] && 
      sequence[i-2] >= sequence[i]) return false;
  }
  
  return true;
}