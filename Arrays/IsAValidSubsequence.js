function isValidSubsequence(array, sequence) {
  let pointer1 = 0;
  let pointer2 = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[pointer1] === sequence[pointer2]) {
      pointer1++;
      pointer2++;
    } else {
      pointer1++;
    }

    if (pointer2 === sequence.length) {
      return true;
    }
  }
  return false;
}

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));
