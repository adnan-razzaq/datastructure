//The idea is to loop over each element and for each element check wheather
//its exists more than array.length/2.
//Naive based approach
const MajorityElement = (array) => {
  let result = -1;
  let majorityLength = Math.floor(array.length / 2);

  for (let i = 0; i < array.length; i++) {
    let current = 1;
    for (let j = 0; j < array.length; j++) {
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

//An efficient approach based on Buyers Mooreys  Voting Algorithm
/* 
!DESCRIPTION
1 Maintain a count and keep track of majority element.
2 Algorithm has two phases. First phase is to find index of majority.
3 Second phase checks whether element identified is indeed a majority.
4 Initially consider element at index 0 as majority and count as 1.
5 Loop through element and check whether element is same as majority then
increment count else decrement count.
6 if count is zero rest majority and count.

*/
function MajorityElementEff(array) {
  let result = 0;
  let count = 1;
  //find a candidate
  for (let i = 1; i < array.length; i++) {
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
