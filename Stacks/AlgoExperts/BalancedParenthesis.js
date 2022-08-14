/* 
!Balanced Brackets★
Write a function that takes in a string made up of brackets((,[,{,),],and
})and other optional characters.The function should return a boolean representing
whether the string is balanced with regards to brackets.
A string is said to be balanced if it has as many opening brackets of a certain type as it
has closing brackets of that type and if no bracket is unmatched.Note that an opening
bracket can't match  a corresponding closing bracket that comes before it,and similarly,
a closing bracket can't match a corresponding opening bracket that comes after it.Also,
brackets can't overlap each other as in[(]).
Sample Input
 string"([])(){}(())00"
Sample Output
 true // it's balanced */

/* 
!DESCRIPTION
1 Create an object with matching pairs.
2 Loop through each element in string and check whether its is closing bracket or opening bracket.
3 If it is opening bracket then push it to the stack.
4 If it is closing bracket then check weather stack is empty or not.
4a If stack is empty then return false as closing cannot be before opening.
4b If stack is not empty then compare the top of stack with current element matching pair.
5 If top of stack and matchingPair[char] are equal then pop from stack
6 If top of stack is not equal matchingPair[char] then return false
7 In the end check the length of stack if is empty return true. 

*/
function balancedBrackets(string) {
    // Write your code here.
    let stack = [];
    let openingBrackets = "({[";
    let closingBrackets = ")}]";

    let matchedBrackets = {
        ")": "(",
        "}": "{",
        "]": "[",
    };

    // Loop through each char in string
    for (const char of string) {
        // check if char is opening bracket
        if (openingBrackets.includes(char)) {
            stack.push(char);
        }
        // check if char is closing bracket
        else if (closingBrackets.includes(char)) {
            // check if stack is empty because closing bracket
            //cannot exist before opening bracket
            if (stack.length === 0) {
                return false;
            } else if (stack[stack.length - 1] === matchedBrackets[char]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(balancedBrackets("([])"));
console.log(balancedBrackets("((())"));
console.log(balancedBrackets("([)]"));
console.log(balancedBrackets("{}([()])"));
console.log(balancedBrackets("(a)"));
console.log(balancedBrackets("(agwgg)([ghhheah%&@Q])"));
