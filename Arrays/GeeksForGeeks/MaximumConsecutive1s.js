// Given a binary array with 0 and 1s. Find maximum consecutive 1s in it

/* 
!DESCRIPTION
1 Initialize result=0
2 Loop through each element and keep track of count of 1s.
3 If current element is 1 then increment count of 1.And use inner loop
to right of it to find consecutive 1s. 
4 Increment count until there exists consecutive 1s.
5 Break the loop immediately when you find 0.
6 In end compare Math.max(result,countof1s)
*/
function Ones(array) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        let count = 0;
        if (array[i] === 1) {
            count++;
            for (let j = i + 1; j < array.length; j++) {
                if (array[j] === 0) break;
                count++;
            }
        }
        result = Math.max(result, count);
    }
    console.log(result, "result");
}
function Consective1s(array) {
    let result = 0;

    for (let i = 0; i < array.length; i++) {
        let count = 0;
        for (let j = i; j < array.length; j++) {
            if (array[j] === 1) count++;
            else break;
        }
        result = Math.max(result, count);
    }
    console.log(result);
    return result;
}

/* An efficient approach to find consecutive1s
!DESCRIPTION
1 Initialize the result=0, current1scCount=0
2 Loop through each element. If element=0 then set current1sCount=0.
3 Else increment current1sCount and compare it with result and store Maximum.
4 return the result.

*/
function ConsecEff(array) {
    let result = 0;
    let current = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            current = 0;
        } else {
            current++;
            result = Math.max(result, current);
        }
    }
    console.log(result);
    return result;
}

ConsecEff([0, 1, 1, 0, 1, 0]);
ConsecEff([1, 1, 1, 1]);
ConsecEff([0, 0, 0]);
ConsecEff([1, 0, 1, 1, 1, 1, 0, 1, 1]);

Consective1s([0, 1, 1, 0, 1, 0]);
Consective1s([1, 1, 1, 1]);
Consective1s([0, 0, 0]);
Consective1s([1, 0, 1, 1, 1, 1, 0, 1, 1]);

Ones([0, 1, 1, 0, 1, 0]);
Ones([1, 1, 1, 1]);
Ones([0, 0, 0]);
Ones([1, 0, 1, 1, 1, 1, 0, 1, 1]);
