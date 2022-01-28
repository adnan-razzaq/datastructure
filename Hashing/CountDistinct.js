function countDistinct(array) {
  const myarray = [array[0]];

  let count = 1;
  for (let i = 1; i < array.length; i++) {
    if (!myarray.includes(array[i])) {
      myarray.push(array[i]);
      count++;
    }
  }
  console.log(count);
  return count;
}

/* Creating a new Set Efficient approach */

function countEff(array) {
  let set = new Set(array);
  console.log(set.size);
}

countEff([15, 12, 13, 12, 13, 13, 18]);
countDistinct([15, 12, 13, 12, 13, 13, 18]);
countDistinct([10, 10, 10]);
countDistinct([10, 11, 12]);
