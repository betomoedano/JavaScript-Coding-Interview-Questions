/**
 * @param {string[]} ideas
 * @return {number}
 * Time O(n * m)
 * Space O(n * m)
 */
const distinctNames = function (ideas) {
  let ideaMap = {};

  for (let idea of ideas) {
    let firstCharacter = idea.slice(0, 1);
    let remainingCharacters = idea.slice(1);
    if (!ideaMap[firstCharacter]) ideaMap[firstCharacter] = new Set();
    ideaMap[firstCharacter].add(remainingCharacters);
  }

  let ideaMapKeys = Object.keys(ideaMap);
  let resultCount = 0;

  for (let i = 0; i < ideaMapKeys.length; i++) {
    let firstSet = ideaMap[ideaMapKeys[i]];
    for (let j = i + 1; j < ideaMapKeys.length; j++) {
      let secondSet = ideaMap[ideaMapKeys[j]];
      let commonCount = 0;
      for (let character of firstSet) {
        if (secondSet.has(character)) commonCount++;
      }
      resultCount +=
        2 * (firstSet.size - commonCount) * (secondSet.size - commonCount);
    }
  }

  return resultCount;
};

// Brute Force
// var distinctNames = function(ideas) {
//   const set = new Set([...ideas]);
//   let result = 0;

//   for (let i = 0; i < ideas.length; i++) {
//     for (let j = 0; j < ideas.length; j++) {
//       if (i === j) continue;
//       const ideaA = ideas[i].split("");
//       const ideaB = ideas[j].split("");
//       const firstLetterA = ideaA.shift();
//       const firstLetterB = ideaB.shift();
//       const newIdeaA = [firstLetterB, ...ideaA].join("");
//       const newIdeaB = [firstLetterA, ...ideaB].join("");

//       if (set.has(newIdeaA) || set.has(newIdeaB)) continue;
//       result++;
//     }
//   }
//   return result;
// };
