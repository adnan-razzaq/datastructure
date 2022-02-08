function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  // Write your code here.
  //sort arrays
  redShirtSpeeds.sort((a, b) => a - b);
  blueShirtSpeeds.sort((a, b) => b - a);
  console.log(redShirtSpeeds);
  console.log(blueShirtSpeeds);
  let totalTendemSpeed = 0;

  for (let i = 0; i < redShirtSpeeds.length; i++) {
    if (fastest === true) {
      let currentFast = Math.max(redShirtSpeeds[i], blueShirtSpeeds[i]);
      totalTendemSpeed += currentFast;
    } else {
      let currentSlow = Math.min(redShirtSpeeds[i], blueShirtSpeeds[i]);
      totalTendemSpeed += currentSlow;
    }
  }
  console.log(totalTendemSpeed);
  return totalTendemSpeed;
}

tandemBicycle(
  [3, 3, 4, 6, 1, 2, 5, 6, 34, 256, 123, 32],
  [1, 2, 1, 9, 12, 3, 1, 54, 21, 231, 32, 1],
  false
);
