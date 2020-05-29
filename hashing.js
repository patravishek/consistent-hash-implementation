"use strict"

const ConsistentHashing = require('consistent-hashing');
const cons = new ConsistentHashing(["node1", "node2", "node3"]);
const lib = require("./display");

const chars = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'
];

let nodes1 = lib.generateServerNames(chars,cons)

console.log("Node arrangement at the initial level"); 
console.log(nodes1);


cons.addNode("node4");

let nodes2 = lib.generateServerNames(chars, cons);

console.log("Node arrangement after adding a new node");
console.log(nodes2);

cons.removeNode("node2");

console.log("Node arrangement after removing node 2");
let nodes3 = lib.generateServerNames(chars, cons);
console.log(nodes3);