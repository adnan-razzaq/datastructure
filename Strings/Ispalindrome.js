/* Naive approach */
function reverse(str) {
  let revstr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revstr += str[i];
  }
  if (str === revstr) {
    return true;
  } else {
    return false;
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
      return false;
    }
  }
  return true;
}

console.log(reverseEff("ABBA"));
console.log(reverseEff("DCCABBACCD"));
