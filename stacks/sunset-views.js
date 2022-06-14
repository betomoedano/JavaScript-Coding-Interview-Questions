//SUNSET VIEWS

// time O(n) where n is the number of buildings
// space O(n)
function sunsetViews(buildings, direction) {
    let currentMaxHeight = 0;
    const stack = [];
  
    let currentIdx = direction === "EAST" ? buildings.length - 1 : 0;
    const step = direction === "EAST" ? -1 : 1;
  
    while (currentIdx >= 0 && currentIdx < buildings.length) {
      let buildingHeight = buildings[currentIdx];
      if (buildingHeight > currentMaxHeight) {
        stack.push(currentIdx);
        currentMaxHeight = buildingHeight;
      }
      currentIdx += step;
    }
    if (direction === "EAST") return stack.reverse(); // time O(n)
    return stack;
  }
  
  const buildings = [3, 5, 4, 4, 3, 1, 3, 2];
  const direction = "EAST";
  console.log(sunsetViews(buildings, direction));