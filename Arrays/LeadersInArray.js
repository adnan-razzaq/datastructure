/**
 * @param  {} array
 * A function to find leaders in array
 * Brute force
 * Time complexity n^2
 *
 */
//Brute force approach to traverse through every element of array and check wheather there exists an element that is greater than it on right side
// Time complexity is n^2
function leaderInArry(array) {
  for (let i = 0; i < array.length; i++) {
    let flag = false;
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] <= array[j]) {
        flag = true;
        break;
      }
    }
    if (flag === false) {
      console.log(array[i]);
    }
  }
}

//An Efficient Approach to find leaders in array. The time complexity of this function in n.
//Idea is to traverse the elemnt from end and find if previous number is smaller than its not a leader
/**
 * @param  {} array
 * Effient approcah to find leaders in array
 */
function leaderInArrayEff(array) {
  let temp = [];
  let currentLeader = array[array.length - 1];
  temp.push(currentLeader);

  for (let i = array.length - 2; i >= 0; i--) {
    if (array[i] > currentLeader) {
      currentLeader = array[i];
      temp.push(currentLeader);
    }
  }
  console.log(temp);
}

leaderInArrayEff([7, 10, 4, 10, 6, 5, 2]);
leaderInArrayEff([10, 20, 30]);
leaderInArrayEff([30, 20, 10]);
