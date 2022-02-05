/*  Activiity selection problem
1- Sort the array according two end time
2- Store first element as result
3 Then compare the start of current with end of last 
4 if start of current is smaller then ignore it
*/

function activity(array) {
  array.sort((a, b) => a[1] - b[1]);
  console.log(array);

  let result = [array[0]];
  let prev = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i][0] >= array[prev][1]) {
      result.push(array[i]);
      prev = i;
    }
  }
  console.log(result);
}

activity([
  [5, 9],
  [1, 2],
  [3, 4],
  [0, 6],
  [5, 7],
  [8, 9],
]);
