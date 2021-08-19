function adjacentElementsProduct(inputArray) {
    let max = -Infinity;
    
    for(let i = 0; i < inputArray.length - 1; i++) {
        let curr = inputArray[i];
        let next = inputArray[i+1];
        
        if ( (curr * next) > max ) max = curr * next;
    }
    
    return max;
}