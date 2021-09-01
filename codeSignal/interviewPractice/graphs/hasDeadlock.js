function hasDeadlock(connections) {
  // let connected = true;
  
  for (let i = 0; i < connections.length; i++) {
    if (i === connections.length - 1) {
      if (!connections[i].includes(0)) return false;
    } else if (!connections[i].includes(i+1)) {
      // connected = false;
      return false;
    }
  }
  
  // return connected;
  return true;
}