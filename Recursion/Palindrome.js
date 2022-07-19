function Palindrome(str, start, end) {
    //base case
    if (start >= end) return true;
    //recursive call
    return str[start] === str[end] && Palindrome(str, start + 1, end - 1);
}

let str = "bbabbbb";
let end = str.length - 1;
console.log(Palindrome(str, 0, end));
