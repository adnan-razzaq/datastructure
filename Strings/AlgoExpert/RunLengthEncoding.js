/* 
Write a function that takes in a non-empty string and returns its run-length encoding.
From Wikipedia,"run-length encoding is a form of lossless data compression in which
runs of data are stored as a single data value and count,rather than as the original
run."For this problem,a run of data is any sequence of consecutive,identical
characters.So the run"AAA"would be run-length-encoded as"3A"
To make things more complicated,however,the input string can contain all sorts of
special characters,including numbers.And since encoded data must be decodable,this
means that we can't naively run-length-encode long runs.For example,the run
 "AAAAAAAAAAAA"(12_As),can't naively be encoded as"12A",since this string can
be decoded as either"AAAAAAAAAAAA"or"1AA".Thus,long runs(runs of 10 or
more characters)should be encoded in a split fashion;the aforementioned run should
be encoded as"9A3A"
Sample Input
   string="AAAAAAAAAAAAABBCCCCDD" */
/* 
!DESCRIPTION
1 Keep track of currentRunLength.
2 Loop through the string and compare previous character with current.
3 If they are not equal Or currentLength is 9 push currentRent length and character to array
4 else Simply increase currentLength
5 Handle the edge case for last element in the array
*/
function runLengthEncoding(string) {
    // Write your code here.
    let currentRunLength = 1;
    let charArray = [];

    for (let i = 1; i < string.length; i++) {
        let currentChar = string[i];
        let previousChar = string[i - 1];

        // comparison when elements are not equal and currentLength is 9
        if (currentChar !== previousChar || currentRunLength === 9) {
            charArray.push(currentRunLength, previousChar);
            currentRunLength = 1;
        } else {
            currentRunLength++;
        }
    }

    // Handle the edge case for last element
    charArray.push(currentRunLength, string[string.length - 1]);

    console.log(charArray.join(""));
    return charArray.join("");
}

runLengthEncoding("AAAAAAAAAAAAABBCCCCDD");
