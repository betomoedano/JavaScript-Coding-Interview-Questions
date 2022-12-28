const routeBetweenNodes = require("../route-between-nodes");

test(`Given 
graph = {
  1: [2],
  2: [3, 4],
  3: [4],
  4: [],
}
origin = 1 
destination = 4
result = true`, () => {
  const graph = {
    1: [2],
    2: [3, 4],
    3: [4],
    4: [],
  };
  const origin = 1;
  const destination = 4;
  expect(routeBetweenNodes(graph, origin, destination)).toBe(true);
});
