function isPalindrome(str) {
    // Convert the string to lowercase and remove non-alphanumeric characters
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Reverse the string and compare it to the original
    return str === str.split('').reverse().join('');
  }
  const str1 = "racecar";
 const str2 = "Hello, world!";

console.log(isPalindrome(str1)); // Outputs true
console.log(isPalindrome(str2)); // Outputs false
