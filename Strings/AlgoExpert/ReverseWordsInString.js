function reverseWordsInString(string) {
    // Write your code here.
    let reversed = string.split(" ").reverse().join(" ");

    return reversed;
}

reverseWordsInString("AlgoExpert is the best!");
