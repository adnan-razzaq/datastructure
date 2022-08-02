/* 
Caesar Cipher Encryptor★
Given a non-empty string of lowercase letters and a non-negative integer representing
a key,write a function that returns a new string obtained by shifting every letter in the
input string by k positions in the alphabet,where k is the key.
Note that letters should"wrap"around the alphabet;in other words,the letter z
shifted by one returns the letter.
Sample Input
 string+"xyz"
 key=2

Sample Output
"zab"
*/
/* 
!DESCRIPTION
1 Idea is to use UTF characters of string a=97 z=122
2 If character code at inputString+key is greater than z then map it back to 
start of UTf of a.
3 Use formula 96 + newLetterCode % 122

 */

function caesarCipherEncryptor(string, key) {
    // Write your code here.
    let EncryptedString = "";
    key = key % 26;
    for (let i = 0; i < string.length; i++) {
        let cipher = string.charCodeAt(i) + key;
        console.log(cipher);

        if (cipher > 122) {
            // map to utf code from "a" onwards
            let code = 96 + (cipher % 122);
            EncryptedString = EncryptedString + String.fromCharCode(code);
        } else {
            EncryptedString = EncryptedString + String.fromCharCode(cipher);
        }
    }
    console.log(EncryptedString);
    return EncryptedString;
}

caesarCipherEncryptor("abc", 2);
