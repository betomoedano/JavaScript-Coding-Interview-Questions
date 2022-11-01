function servedBuildings(buildingCount, routerLocation, routerRange) {
  if (buildingCount.length === 0) return 0;
  const numberOfRoutesPerBuilding = new Array(buildingCount.length).fill(0);
  let servedBuildings = 0;

  // rage [(i - rounterRange[j]), (i - rounterRange[j])]
  // [1 - 2, 1 + 2] => [1, 3] //abs
  // [3 - 1, 3 + 1] => [2, 4] //abs

  for (let i = 0; i < routerLocation.length; i++) {
    const range = [
      Math.abs(routerLocation[i] - routerRange[i]),
      Math.abs(routerLocation[i] + routerRange[i]),
    ];
    for (let i = range[0]; i <= range[1]; i++) {
      numberOfRoutesPerBuilding[i - 1]++;
    }
  }

  for (let i = 0; i < buildingCount.length; i++) {
    const peopleLiving = buildingCount[i];
    const routersServing = numberOfRoutesPerBuilding[i];
    if (routersServing >= peopleLiving) servedBuildings++;
  }
  console.log(numberOfRoutesPerBuilding);
  console.log(buildingCount);
  return servedBuildings;
}

// const buildingCount = [1, 2, 1, 2, 2];
// const routerLocation = [3, 1];
// const routerRange = [1, 2];
const buildingCount = [2, 1, 1, 2];
const routerLocation = [1, 2];
const routerRange = [2, 0];
console.log(servedBuildings(buildingCount, routerLocation, routerRange));
