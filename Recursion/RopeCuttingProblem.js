function NumberOfCuts(ropeLength, option1, option2, option3) {
    //base cases
    if (ropeLength === 0) return 0;
    if (ropeLength < 0) return -1;

    //recursive calls
    let withOption1 = Math.max(
        NumberOfCuts(ropeLength - option1, option1, option2, option3)
    );

    let withOption2 = Math.max(
        NumberOfCuts(ropeLength - option2, option1, option2, option3)
    );
    let withOption3 = Math.max(
        NumberOfCuts(ropeLength - option3, option1, option2, option3)
    );
    let maxPieces = Math.max(withOption1, withOption2, withOption3);

    if (maxPieces === -1) return -1;
    return maxPieces + 1;
}

console.log(NumberOfCuts(23, 11, 9, 12));
