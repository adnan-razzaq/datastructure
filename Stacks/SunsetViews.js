function sunsetViewss(buildings, direction) {
  // Write your code here.

  let sunset = [];
  let arrayLength = buildings.length - 1;
  if (buildings.length == 0) return [];
  if (direction === "EAST") {
    let current = 0;

    for (let i = arrayLength; i >= 0; i--) {
      if (buildings[i] > current) {
        sunset.push(i);
        current = Math.max(current, buildings[i]);
      }
    }
  }
  if (direction === "WEST") {
    let current = 0;

    for (let i = 0; i <= arrayLength; i++) {
      if (buildings[i] > current) {
        sunset.push(i);
        current = Math.max(current, buildings[i]);
      }
    }
  }
  sunset.sort((a, b) => a - b);
  return sunset;
}

/* Function */

function sunsetViews(buildings, direction) {
  // Write your code here.
  const sunset = [];
  let startidx = direction === "WEST" ? 0 : buildings.length - 1;
  let step = direction === "WEST" ? 1 : -1;

  let idx = startidx;
  let maxHeight = 0;
  while (idx >= 0 && idx < buildings.length - 1) {
    const currentHeight = buildings[idx];
    if (currentHeight > maxHeight) sunset.push(idx);
    maxHeight = Math.max(maxHeight, currentHeight);
    idx = idx + step;
  }
  sunset.reverse();
  return sunset;
}

sunsetViews([3, 5, 4, 4, 3, 1, 3, 2], "EAST");
