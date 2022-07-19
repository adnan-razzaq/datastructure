function subsets(str, curr = "", index = 0) {
    //base case
    if (index === str.length) {
        console.log(curr);
        return;
    }

    subsets(str, curr, index + 1);
    subsets(str, curr + str[index], index + 1);
}

subsets("ABC");
