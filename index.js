function isPalindrome(word) {
  // Write your algorithm here
  if (word.length <= 1) {
    return true;
  }

  let left = 0;
  let right = word.length - 1;

  while (left < right) {
    if (word[left] !== word[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

/* 
  Add your pseudocode here
*/


/*
  Add written explanation of your solution here
  The `isPalindrome` function determines if a given string `word` is a palindrome.
  A palindrome is a word that reads the same forwards and backwards.

  1. **Base Case:** If the length of the `word` is 0 or 1, it is considered a palindrome, so the function immediately returns `true`.

  2. **Initialize Pointers:** Two pointers, `left` and `right`, are initialized. `left` starts at the beginning of the string (index 0), and `right` starts at the end of the string (index length - 1).

  3. **Two-Pointer Iteration:** A `while` loop continues as long as the `left` pointer is less than the `right` pointer. In each iteration:
     - **Comparison:** The character at the `left` pointer is compared with the character at the `right` pointer.
     - **Mismatch:** If the characters are not equal, it means the string is not a palindrome, and the function immediately returns `false`.
     - **Pointer Movement:** If the characters are equal, the `left` pointer is moved one position to the right (`left++`), and the `right` pointer is moved one position to the left (`right--`). This brings the pointers closer to the middle of the string.

  4. **Palindrome Confirmation:** If the `while` loop completes without the function returning `false`, it means all the corresponding characters from the beginning and end of the string were equal. Therefore, the string is a palindrome, and the function returns `true`.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}
console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome(""));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hello"));


module.exports = isPalindrome;
