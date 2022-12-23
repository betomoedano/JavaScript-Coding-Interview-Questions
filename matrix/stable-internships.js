// O(n^2) Time
// O(n^2) Space - where n is the number of interns and teams
function stableInternships(interns, teams) {
  const chosenInterns = {};
  const freeInterns = interns.map((_, i) => i);
  const currentInternChoices = new Array(interns.length).fill(0);

  const teamMaps = [];

  for (const team of teams) {
    const rank = {};
    team.forEach((internNum, i) => {
      rank[internNum] = i;
    });
    teamMaps.push(rank);
  }

  while (freeInterns.length > 0) {
    const internNum = freeInterns.pop();

    const intern = interns[internNum];
    const teamPreference = intern[currentInternChoices[internNum]];
    currentInternChoices[internNum] += 1;

    if (!(teamPreference in chosenInterns)) {
      chosenInterns[teamPreference] = internNum;
      continue;
    }

    const previousIntern = chosenInterns[teamPreference];
    const previousInternRank = teamMaps[teamPreference][previousIntern];
    const currentInternRank = teamMaps[teamPreference][internNum];

    if (currentInternRank < previousInternRank) {
      freeInterns.push(previousIntern);
      chosenInterns[teamPreference] = internNum;
    } else {
      freeInterns.push(internNum);
    }
  }
  const matches = Object.entries(chosenInterns).map(([teamNum, internNum]) => [
    internNum,
    parseInt(teamNum),
  ]);
  return matches;
}
