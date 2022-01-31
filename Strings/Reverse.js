/* Naive approach */
function reverse(str) {
  let revstr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revstr += str[i];
  }
  if (str === revstr) {
    console.log("Palindrome");
  } else {
    console.log("Not a palindrome");
  }
}

/* Effiecient approach */

function reverseEff(string) {
  let start = 0;
  let end = string.length - 1;

  while (start < end) {
    if (string.charAt(start) === string.charAt(end)) {
      start++;
      end--;
    } else {
      return "Not a palindrom";
    }
  }
  return "it is a palindrome";
}

console.log(reverseEff("ABBA"));
console.log(reverseEff("DCCABBACCD"));
