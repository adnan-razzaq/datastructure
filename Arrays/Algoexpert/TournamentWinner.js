/* 
!Description
1 The idea here is to use hash map to store the scores.
2 Loop through both arrays and update the scores. 0 means away wins and 1 means home wins
3 Return the team with highest scores from object
*/
function tournamentWinner(competitions, results) {
    // DataStore object
    let scores = {};
    for (let index = 0; index < competitions.length; index++) {
        const [home, away] = competitions[index];

        //away wins
        if (results[index] === 0) {
            if (away in scores) {
                // property already exists
                scores[away] = scores[away] + 3;
            } else {
                scores[away] = 3;
            }
        } else {
            //home wins
            if (home in scores) {
                scores[home] = scores[home] + 3;
            } else {
                scores[home] = 3;
            }
        }
    }
    // get value with max
    let max = Object.keys(scores).reduce((prev, curr) => {
        return scores[curr] > scores[prev] ? curr : acc;
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

/*
!Description
1-The idea here is to keep track of CurrentBestTeam.
 and and store the values of team wins in object */

function tournamentWinnerEff(competitions, results) {
    // Write your code here.
    let data = {
        "": 0,
    };
    let CurrentBestTeam = "";

    for (let i = 0; i < competitions.length; i++) {
        const [home, away] = competitions[i];
        if (results[i] === 0) {
            //away wins
            if (away in data) data[away] = data[away] + 3;
            else {
                data[away] = 3;
            }
            //compare with currentBestTeam
            if (data[away] > data[CurrentBestTeam]) CurrentBestTeam = away;
        } else {
            //home wins
            if (home in data) data[home] = data[home] + 3;
            else {
                data[home] = 3;
            }
            //compare with currentBestTeam
            if (data[home] > data[CurrentBestTeam]) CurrentBestTeam = home;
        }
    }
    return CurrentBestTeam;
}

tournamentWinnerEff(
    [
        ["HTML", "C#"],
        ["C#", "Python"],
        ["Python", "HTML"],
    ],
    [0, 0, 1]
);
