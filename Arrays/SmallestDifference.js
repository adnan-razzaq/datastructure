function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  //use two pointers
  let pointer1 = 0;
  let pointer2 = 0;
  let smallestPair = [];
  let currentSmall = Infinity;
  while (pointer1 !== arrayOne.length && pointer2 !== arrayTwo.length) {
    let numberOne = arrayOne[pointer1];
    let numberTwo = arrayTwo[pointer2];
    //if both are equal then return
    if (numberOne === numberTwo) {
      return [numberOne, numberTwo];
    }
    //if number1 is less increment pointer1
    if (numberOne < numberTwo) {
      pointer1++;
    } else {
      pointer2++;
    }
    // track of smallest difference and currentPair
    let difference = Math.abs(numberOne - numberTwo);
    if (difference < currentSmall) {
      currentSmall = difference;
      smallestPair = [numberOne, numberTwo];
    }
    console.log(difference);
    console.log(smallestPair);
  }
  return smallestPair;
}

console.log(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]));
