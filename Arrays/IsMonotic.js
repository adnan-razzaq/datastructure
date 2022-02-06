/* Check if array is Monotic means its in upward trend or downwrd trend */

function isMonotonic(array) {
  // Write your code here.
  //length is 0 or 1
  if (array.length < 2) return true;

  let trend = array[0] >= array[1] ? "downward" : "upward";
  let current = array[1];

  for (let i = 2; i < array.length; i++) {
    if (trend === "downward") {
      //check the trend downward is broken or not
      if (array[i] <= current) {
        current = array[i];
      } else {
        return false;
      }
    }
    if (trend === "upward") {
      if (array[i] >= current) {
        current = array[i];
      } else {
        return false;
      }
    }
  }
  return true;
}

console.log(
  isMonotonic([-1, -1, -2, -3, -4, -5, -5, -5, -6, -7, -8, -8, -9, -10, -11])
);
