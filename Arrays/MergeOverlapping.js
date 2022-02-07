function mergeOverlappingIntervals(array) {
  // Write your code here.
  // Greedy Algorithm
  array.sort((a, b) => a[1] - b[1]);

  let mergedIntervals = [];
  let currentInterval = array[0];
  mergedIntervals.push(currentInterval);

  for (const nextInterval of array) {
    //destructuring
    const [nextIntervalStart, nextIntervalEnd] = nextInterval;
    const [currentIntervalStart, currentintervalEnd] = currentInterval;

    if (currentintervalEnd >= nextIntervalStart) {
      //overlapping
      currentInterval[1] = Math.max(currentintervalEnd, nextIntervalEnd);
    } else {
      //not overlapping
      currentInterval = nextInterval;
      mergedIntervals.push(currentInterval);
    }
  }
  console.log(mergedIntervals);
  return mergedIntervals;
}

mergeOverlappingIntervals([
  [1, 2],
  [3, 5],
  [4, 7],
  [6, 8],
  [9, 10],
]);
