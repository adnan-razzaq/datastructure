/* Phone Number Nemonics */

/* 
!Description
1 Use Recursion
2 Use index variable to keep track of current Number.
3 For each num create a object with thier respective digits.
4 Identify the base case if i is equal to length of string then push the current nemonic in array.


*/

const phonePairs = {
    1: ["1"],
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "1"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
    0: ["0"],
};

function phoneNumberMnemonics(phoneNumber) {
    // Write your code here.
    let result = [];

    let currentNemonic = [];

    PhoneNumberNemonicsHelper(0, phoneNumber, currentNemonic, result);
    return result;
}

function PhoneNumberNemonicsHelper(idx, phoneNumber, currentNemonic, result) {
    // base case
    if (idx === phoneNumber.length) {
        let finalString = currentNemonic.join("");
        result.push(finalString);
        return;
    }

    let digit = phoneNumber[idx];
    const letters = phonePairs[digit];

    for (const letter of letters) {
        currentNemonic[idx] = letter;

        PhoneNumberNemonicsHelper(idx + 1, phoneNumber, currentNemonic, result);
    }
}
phoneNumberMnemonics("1905");
