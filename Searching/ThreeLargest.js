function findThreeLargestNumbers(array) {
  // Write your code here.
  let threeLargest = new Array(3).fill(null);

  for (const num of array) {
    updateLargest(threeLargest, num);
  }
  return threeLargest;
}

//function compares for input values with threeLargest array
// T (O(n)) S(O(1))
function updateLargest(array, number) {
  if (array[2] === null || array[2] < number) {
    shiftUpdate(array, number, 2);
  } else if (array[1] === null || array[1] < number) {
    shiftUpdate(array, number, 1);
  } else if (array[0] === null || array[0] < number) {
    shiftUpdate(array, number, 0);
  }
}

function shiftUpdate(array, number, index) {
  for (let i = 0; i <= index; i++) {
    if (i === index) array[i] = number;
    else array[i] = array[i + 1];
  }
}

findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]);
