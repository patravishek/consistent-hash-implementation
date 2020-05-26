"use strict"

const ConsistentHashing = require('consistent-hashing');
const cons = new ConsistentHashing(["node1", "node2", "node3"]);

const nodes = {};
const chars = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'
];

chars.forEach(function(c) {
  const node = cons.getNode(c);

  if (nodes[node]) {
    nodes[node].push(c);
  } else {
    nodes[node] = [];
    nodes[node].push(c);
  }
});

console.log(nodes);
