function applicationPairs(
  deviceCapacity,
  foregroundAppList,
  backgroundAppList
) {
  const combinations = {};
  let closest = 0;
  const result = [];

  for (const foreground of foregroundAppList) {
    for (const backgrond of backgroundAppList) {
      combinations[[foreground[0], backgrond[0]]] =
        foreground[1] + backgrond[1];
    }
  }

  Object.values(combinations).forEach((value) => {
    if (value <= deviceCapacity && value > closest) closest = value;
  });
  Object.keys(combinations).forEach((key) => {
    if (combinations[key] === closest) {
      const left = parseInt(key.split(",")[0]);
      const right = parseInt(key.split(",")[1]);
      result.push([left, right]);
    }
  });
  return result.length === 0 ? [[]] : result;
}
const deviceCapacity = 7;
const foregroundAppList = [
  [1, 2],
  [2, 4],
  [3, 6],
];
const backgroundAppList = [[1, 2]];

// const deviceCapacity = 16;
// const foregroundAppList = [
//   [2, 7],
//   [3, 14],
// ];
// const backgroundAppList = [
//   [2, 10],
//   [3, 14],
// ];

// const deviceCapacity = 10;
// const foregroundAppList = [
//   [1, 3],
//   [2, 5],
//   [3, 7],
//   [4, 10],
// ];
// const backgroundAppList = [
//   [1, 2],
//   [2, 3],
//   [3, 4],
//   [4, 5],
// ];

console.log(
  applicationPairs(deviceCapacity, foregroundAppList, backgroundAppList)
);
