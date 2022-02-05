/* The idea here is to keep track of CurrentBestTeam and and store the values of team wins in object */

function tournamentWinner(competitions, results) {
  // Write your code here.
  let data = {
    "": 0,
  };
  let CurrentBestTeam = "";

  for (let i = 0; i < competitions.length; i++) {
    const [home, away] = competitions[i];
    if (results[i] === 0) {
      //away wins
      if (data.hasOwnProperty(away)) data[away] = data[away] + 3;
      else {
        data[away] = 3;
      }
      //compare with currentBestTeam
      if (data[away] > data[CurrentBestTeam]) CurrentBestTeam = away;
    } else {
      //home wins
      if (data.hasOwnProperty(home)) data[home] = data[home] + 3;
      else {
        data[home] = 3;
      }
      //compare with currentBestTeam
      if (data[home] > data[CurrentBestTeam]) CurrentBestTeam = home;
    }
  }
  return CurrentBestTeam;
}

tournamentWinner(
  [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"],
  ],
  [0, 0, 1]
);
