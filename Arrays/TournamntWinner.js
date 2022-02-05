function tournamentWinner(competitions, results) {
  // Write your code here.
  let data = {};

  for (let i = 0; i < competitions.length; i++) {
    const [home, away] = competitions[i];

    if (results[i] === 0) {
      //away wins
      if (data.hasOwnProperty(away)) {
        data[away] = data[away] + 3;
      } else {
        data[away] = 3;
      }
    } else {
      //home wins
      if (data.hasOwnProperty(home)) {
        data[home] = data[home] + 3;
      } else {
        data[home] = 3;
      }
    }
  }
  // get value with max
  let max = Object.keys(data).reduce((acc, curr) => {
    return data[curr] > data[acc] ? curr : acc;
  });
  return max;
}

tournamentWinner(
  [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"],
  ],
  [0, 0, 1]
);
