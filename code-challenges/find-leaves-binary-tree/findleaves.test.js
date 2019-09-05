'use strict';

const binaryTree = require('./findleaves');

describe('Binary tree', () => {
  test('it can initiate a binary tree and append a node', () => {
    let myTree = new binaryTree();

    myTree.append(10);
    myTree.append(5);
    myTree.append(98);
    console.log(myTree);
  });
});
