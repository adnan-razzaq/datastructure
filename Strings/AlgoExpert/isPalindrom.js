/* Palindrome Check★

Write a function that takes in a non-empty string and that return s a boolean
representing whether the string is a palindrome.
A palindrome is defined as a string that's written the same forward and backward.Note
that single-character strings are palindromes.
Sample Input
 string="abcdcba" */

/* 
 ! DESCRIPTION:
 1 Reverse the input string and store it new variable.
 2 If reversedString is equal to input string than it is a palindrome
 */
function isPalindrome(string) {
    let revStr = "";
    for (let i = string.length - 1; i >= 0; i--) {
        revStr = revStr + string[i];
    }
    return string === revStr ? true : false;
}

/* 
 !DESCRIPTION:
 1 Use two indexes start index and end index
 2 Loop through the string and compare string[start] and string[end]
 3 If strings are not equal return false
 4 if strings are equal compare other characters of string
 */
function isPalindromes(string) {
    // Write your code here.
    let start = 0;
    let end = string.length - 1;

    while (start <= end) {
        if (string[start] !== string[end]) {
            return false;
        } else {
            start++;
            end--;
        }
    }
    return true;
}
