//////////////////////////////////////////////////

// BREADTH-FIRST SEARCH

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(array) {
    const queue = [this];
    while (queue.length > 0) {
      const curretNode = queue.shift();
      array.push(curretNode.name);
      for (let child of curretNode.children) {
        queue.push(child);
      }
    }
    return array;
  }
}

const graph = new Node("A");
graph.addChild("B").addChild("C").addChild("D");
graph.children[0].addChild("E").addChild("F");
graph.children[2].addChild("G").addChild("H");
graph.children[0].children[1].addChild("I").addChild("J");
graph.children[2].children[0].addChild("K");

console.log(graph.breadthFirstSearch([]));

