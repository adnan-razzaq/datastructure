function runLengthEncoding(string) {
  // Write your code here.
  let charArray = [];
  //String will never be empty
  let runLength = 1;
  for (let i = 1; i < string.length; i++) {
    let previousChar = string[i - 1];
    let currentChar = string[i];
    if (currentChar !== previousChar || runLength === 9) {
      charArray.push(runLength.toString());
      charArray.push(previousChar);
      runLength = 0;
    }
    runLength++;
  }

  //handle last case
  charArray.push(runLength.toString());
  charArray.push(string[string.length - 1]);
}

runLengthEncoding("AAAAAAAAAAAAABBCCCCDD");
