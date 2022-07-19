function SumOfNaturalNumber(num) {
    //base case
    if (num === 0) return 0;

    //recursive call
    return num + SumOfNaturalNumber(num - 1);
}

SumOfNaturalNumber(4);
