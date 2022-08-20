/* 
!Description
1 Initialize the subsets as an empty array
2 Loop through each input item.
3 For each input item loop through the subsets array and for each
subset concat the current value and push it to end of subsets.
4 return subsets 
*/

function powerset(array) {
    // Write your code here.

    //initialize as an empty array
    const subsets = [[]];

    for (const element of array) {
        const lengths = subsets.length;
        for (let i = 0; i < lengths; i++) {
            const currentSubset = subsets[i];
            subsets.push(currentSubset.concat(element));
        }
    }
    console.log(subsets);
    return subsets;
}

powerset([1, 2, 3]);
