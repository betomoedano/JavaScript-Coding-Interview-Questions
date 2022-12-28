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

test(`Given 
graph = {
  1: [2],
  2: [3, 4],
  3: [4],
  4: [],
}
origin = 4 
destination = 1
result = true`, () => {
  const graph = {
    1: [2],
    2: [3, 4],
    3: [4],
    4: [],
  };
  const origin = 4;
  const destination = 1;
  expect(routeBetweenNodes(graph, origin, destination)).toBe(false);
});

test(`Given 
graph = {
  1: [2],
  2: [3, 4],
  3: [4],
  4: [1, 2, 3],
}
origin = 4 
destination = 1
result = true`, () => {
  const graph = {
    1: [2],
    2: [3, 4],
    3: [4],
    4: [1, 2, 3],
  };
  const origin = 4;
  const destination = 1;
  expect(routeBetweenNodes(graph, origin, destination)).toBe(true);
});
