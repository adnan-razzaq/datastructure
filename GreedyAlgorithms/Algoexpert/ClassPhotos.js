/* 
!DESCRIPTION
1 Sort both arrays in descending Order.
2 Determine which row of students should be in front and which on back.
3 The tallest height amount student determine placement.
4 Loop through array and check if current tallest in back row is smaller than in front.
5 Then you cannot take the photo. Return
6 else return true
*/

function classPhotos(redShirtHeights, blueShirtHeights) {
    // sort in descending order
    redShirtHeights.sort((a, b) => b - a);
    blueShirtHeights.sort((a, b) => b - a);

    // determine which row to place in back.
    // Largest element detemines that
    let previousRow =
        redShirtHeights[0] > blueShirtHeights[0] ? "redShirts" : "blueShirts";

    for (let i = 0; i < redShirtHeights.length; i++) {
        // Check if back row is smaller than front. Photo not possible
        if (previousRow === "redShirts") {
            if (redShirtHeights[i] <= blueShirtHeights[i]) {
                return false;
            }
        }
        // Check if back row is smaller than front. Photo not possible
        if (previousRow === "blueShirts") {
            if (blueShirtHeights[i] <= redShirtHeights[i]) {
                return false;
            }
        }
    }
    return true;
}

function classPhotoss(redShirtHeights, blueShirtHeights) {
    // Write your code here.
    redShirtHeights.sort((a, b) => b - a);
    blueShirtHeights.sort((a, b) => b - a);

    let previousRow = redShirtHeights[0] > blueShirtHeights[0] ? "red" : "blue";

    for (i = 0; i < blueShirtHeights.length; i++) {
        if (
            previousRow === "red" &&
            redShirtHeights[i] - blueShirtHeights[i] <= 0
        )
            return false;
        if (
            previousRow === "blue" &&
            blueShirtHeights[i] - redShirtHeights[i] <= 0
        )
            return false;
    }

    return true;
}

console.log(classPhotos([6, 9, 2, 4, 5, 1], [5, 8, 1, 3, 4, 9]));
