function checkPalindrome(inputString) {
    if (inputString.length <= 1) return true;
    return inputString === inputString.split('').reverse().join('');
}