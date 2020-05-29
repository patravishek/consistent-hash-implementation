"use strict"

 const generateServerNames = (chars, cons) => {
    const nodes = {};
    chars.forEach(function(c) {
        const node = cons.getNode(c);

        if (nodes[node]) {
        nodes[node].push(c);
        } else {
        nodes[node] = [];
        nodes[node].push(c);
        }
    });

    return nodes;
}

module.exports = {
    generateServerNames
}