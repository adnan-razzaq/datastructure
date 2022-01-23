//The idea is to loop over each element and for each element check wheather
//its exists more than array.length/2.
//Naive based approach
const MajorityElement = (array) => {
  let result = -1;
  let majorityLength = Math.floor(array.length / 2);

  for (let i = 0; i < array.length; i++) {
    let current = 1;
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        current++;
      }
    }
    if (current > majorityLength) {
      result = i;
    }
  }
  console.log(result);
  return result;
};

//An efficient approach based on Buyers Morres Algorithm
function MajorityElementEff(array) {
  let result = 0;
  let count = 1;
  //find a candidate
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[result]) {
      count++;
    } else {
      count--;
    }
    if (count === 0) {
      result = i;
      count = 1;
    }
  }
  //check if the candidate is actually a majority
  count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[result] === array[i]) {
      count++;
    }
  }
  if (count < array.length / 2) {
    result = -1;
  }
  console.log(result);
  return result;
}

MajorityElementEff([8, 3, 4, 8, 8]);
MajorityElementEff([3, 7, 4, 7, 7, 5]);
MajorityElementEff([20, 30, 40, 50, 50, 50, 50]);
