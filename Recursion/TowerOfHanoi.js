/* 
The logic here is to use recursion.Try to solve problem for n-1 disks
Initially use position3 as auxilary position
Move disc from 1 to 3
use position 1 as auxilary 

*/
/**
 * @param  {number} noOfDisks - Total number of Disks
 * @param  {string} Position1 - Start Position
 * @param  {string} Position2 - Middle Position
 * @param  {string} Position3 - Final Destination
 * @returns none
 */
function TowerOfHanoi(noOfDisks, Position1, Position2, Position3) {
    //base case

    if (noOfDisks === 1) {
        console.log(`Move from ${Position1} to ${Position3}`);
        return;
    }

    //recursive calls
    TowerOfHanoi(noOfDisks - 1, Position1, Position3, Position2);
    console.log(`Move from ${Position1} to ${Position3} `);
    TowerOfHanoi(noOfDisks - 1, Position2, Position1, Position3);
}

TowerOfHanoi(2, "A", "B", "C");
