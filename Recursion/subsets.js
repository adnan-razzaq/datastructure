/* 
1 Intialtilze the curr as empty string 
2 Keep track of current letter at index
3 We have two options add current letter or not.
4 Make two recursive calls.
*/

function subsets(str, curr = "", index = 0) {
    //base case
    if (index === str.length) {
        console.log(curr);
        return;
    }

    //exclude
    subsets(str, curr, index + 1);

    //include
    subsets(str, curr + str[index], index + 1);
}

subsets("ABC");
