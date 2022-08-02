/* 
!DESCRIPTION
1 Brute Force approach
2 Use two for loops.Use repeated= false to keep track whether current character is repeated or not.
3 Check if element is repeated or not.
4 When repeated is false  return the indexof first non repeating element.
*/
function firstNonRepeatingCharactesr(string) {
    // Write your code here.

    let repeated = false;
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < string.length; j++) {
            if (string[i] === string[j] && i !== j) {
                repeated = true;
            }
        }
        if (repeated === false) return i;
        repeated = false;
    }

    return -1;
}

/* 
!DESCRIPTION
1 Use hash table to store occurrences of each character.
2 If they already exists in hash table just increment the value by 1.
3 Loop through the array an map the key to check which first occurance has 1 first.
4 return the index of the value
*/
function firstNonRepeatingCharacter(string) {
    // Write your code here.

    const store = {};

    for (const character of string) {
        if (character in store) store[character] = store[character] + 1;
        else {
            store[character] = 1;
        }
    }

    for (let i = 0; i < string.length; i++) {
        let character = string[i];

        if (store[character] === 1) return i;
    }
    return -1;
}

console.log(firstNonRepeatingCharacter("faadabcbbebdf"));
