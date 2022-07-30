/* 
!DESCRIPTION:
1 Sort both arrays in ascending order
2 Use two indexes one for each array
3 If values are equal return those values
3 if value of element at arrayOne is smaller then element at arrayTwo then increment arrayOneIdex.
4 if value of element at arrayTwo is smaller then element at arrayOne then increment arrayOneIdex.
5 Compare current difference with smallest and in end return smallest pair
*/

function smallestDifference(arrayOne, arrayTwo) {
    // Write your code here.
    let arrOneIdx = 0;
    let arrTwoIdx = 0;
    let smallest = Infinity;
    let current = Infinity;
    let smallestPair = [];

    // sort arrays ascending
    arrayOne.sort((a, b) => a - b);
    arrayTwo.sort((a, b) => a - b);

    while (arrOneIdx < arrayOne.length && arrTwoIdx < arrayTwo.length) {
        let firstNumber = arrayOne[arrOneIdx];
        let secondNumber = arrayTwo[arrTwoIdx];
        current = Math.abs(firstNumber - secondNumber);
        // Numbers are equal so smallest
        if (firstNumber === secondNumber) {
            return [firstNumber, secondNumber];
        } else if (firstNumber < secondNumber) {
            arrOneIdx++;
        } else {
            arrTwoIdx++;
        }
        // track of smallest difference and currentPair
        if (smallest > current) {
            smallest = current;
            smallestPair = [firstNumber, secondNumber];
        }
    }
    return smallestPair;
}
