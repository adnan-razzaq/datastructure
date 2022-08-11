/* 
Write a function that takes in an array of strings and groups anagrams together.
Anagrams are strings made up of exactly the same letters,where order doesn't matter.
For example,"cinema"and"iceman"are anagrams;similarly,"foo"and
 "ofo"are anagrams.
Your function should return a list of anagram groups in no particular order.
Sample Input
  words=["yo","act","flop","tac","foo","cat","oy","olfp"]
Sample Output
   [["yo","oy"],["flop","olfp"],["act","tac","cat"],["foo"]]
*/

/* 
!DESCRIPTION
1 Use hash table to store the value
2 Loop over the array of string and sort each array of string
3 After sorting check element with sorted key exists in store.
4 If yes then push the current word in store 
5 if Not then add a new key value pair with sorted key
6 Return all the values from Object
*/
function groupAnagrams(words) {
    // Write your code here.
    let store = {};

    for (const word of words) {
        let sortedWord = word.split("").sort().join("");

        if (sortedWord in store) {
            store[sortedWord].push(word);
        } else {
            store[sortedWord] = [word];
        }
    }
    return Object.values(store);
}

groupAnagrams(["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"]);
