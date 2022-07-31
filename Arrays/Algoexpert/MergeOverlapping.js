/* 
!DESCRIPTION
1 Sort according to first value of array.
2 Store Initial value as array at index 0
3 Compare currentINterval with next interval.
4 If end time of currentInterval is greater or equal to nextInterval.
Then they are overlapping.
5 If overlapping replace currentInterval end with max value.

*/
function mergeOverlappingIntervals(array) {
    // First sort array according to end of interval
    array.sort((a, b) => a[0] - b[0]);

    let mergedInterval = [];
    let previousInterval = array[0];
    mergedInterval.push(previousInterval);

    for (let i = 1; i < array.length; i++) {
        const [_, previousEnd] = previousInterval;
        const [nextStart, nextEnd] = array[i];

        if (previousEnd >= nextStart) {
            //overlapping
            previousInterval[1] = Math.max(previousEnd, nextEnd);
        } else {
            previousInterval = array[i];
            mergedInterval.push(previousInterval);
        }
    }
    console.log(mergedInterval);
    return mergedInterval;
}

mergeOverlappingIntervals([
    [89, 90],
    [-10, 20],
    [-50, 0],
    [70, 90],
    [90, 91],
    [90, 95],
]);
