function classPhotos(redShirtHeights, blueShirtHeights) {
  // Write your code here.
  redShirtHeights.sort((a, b) => b - a);
  blueShirtHeights.sort((a, b) => b - a);

  let previousRow = redShirtHeights[0] > blueShirtHeights[0] ? "red" : "blue";

  for (i = 0; i < blueShirtHeights.length; i++) {
    if (previousRow === "red" && redShirtHeights[i] - blueShirtHeights[i] <= 0)
      return false;
    if (previousRow === "blue" && blueShirtHeights[i] - redShirtHeights[i] <= 0)
      return false;
  }

  return true;
}

console.log(classPhotos([5, 8, 1, 3, 4], [6, 9, 2, 4, 5]));
