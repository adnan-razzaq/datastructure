function caesarCipherEncryptor(string, key) {
  // Write your code here.
  let str = "";
  for (let i = 0; i < string.length; i++) {
    let cipher = string.charCodeAt(i) + key;
    if (cipher <= 122) {
      let encrypted = String.fromCharCode(cipher);
      str += encrypted;
    } else {
      let code = 96 + (cipher % 122);
      let encrypted = String.fromCharCode(code);
      str += encrypted;
    }
  }
  console.log(str);
  return str;
}

caesarCipherEncryptor("abc", 52);
