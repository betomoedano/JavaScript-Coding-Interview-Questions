///////////////////////////////////////////////////////////////
// YOUNGEST COMMOND ANCESTOR
// time O(d) where d is the depth (height) of the ancestral tree 
// space O(1) 


class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }

  addAsAncestor(descendants) {
    for (const descendant of descendants) {
      descendant.ancestor = this;
    }
  }
}

function getTrees() {
  const trees = {};
  const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  for (const letter of ALPHABET) {
    trees[letter] = new AncestralTree(letter);
  }
  return trees;
}

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  const depthOne = getDepthOfDecendant(descendantOne, topAncestor);
  const depthTwo = getDepthOfDecendant(descendantTwo, topAncestor);

  if (depthOne > depthTwo)
    return backtrackAncestralTree(
      descendantOne,
      descendantTwo,
      depthOne - depthTwo
    );
  else
    return backtrackAncestralTree(
      descendantTwo,
      descendantOne,
      depthTwo - depthOne
    );
}

function backtrackAncestralTree(lowerDecendant, higherDesecendant, diff) {
  while (diff > 0) {
    lowerDecendant = lowerDecendant.ancestor;
    diff--;
  }
  while (lowerDecendant !== higherDesecendant) {
    lowerDecendant = lowerDecendant.ancestor;
    higherDesecendant = higherDesecendant.ancestor;
  }
  return lowerDecendant;
}

function getDepthOfDecendant(decendant, topAncestor) {
  let depth = 0;
  while (decendant !== topAncestor) {
    depth++;
    decendant = decendant.ancestor;
  }
  return depth;
}

const trees = getTrees();
trees["A"].addAsAncestor([trees["B"], trees["C"]]);
trees["B"].addAsAncestor([trees["D"], trees["E"]]);
trees["D"].addAsAncestor([trees["H"], trees["I"]]);
trees["C"].addAsAncestor([trees["F"], trees["G"]]);

console.log(getYoungestCommonAncestor(trees.A, trees.E, trees.I));


