/* Given a number print first n numbers in increasing order such that 
all these numbers have digits in set {5,6}
*/
function GenerateNumbers(n) {
  // creating queue and pushing as string inside it
  let queue = [];
  queue.push("5");
  queue.push("6");

  for (let i = 0; i < n; i++) {
    let current = queue.shift();
    console.log(current);
    queue.push(current + "5");
    queue.push(current + "6");
  }
  console.log(queue);
}

GenerateNumbers(10);
