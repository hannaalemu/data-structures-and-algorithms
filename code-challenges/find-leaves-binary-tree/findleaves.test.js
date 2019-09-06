'use strict';

const binaryTree = require('./findleaves');
describe('Binary tree', () => {
  test('it can initiate a binary tree and append a node', () => {
    let myTree = new binaryTree();

    const one = new Node(10);
    const two = new Node(2);
    const three = new Node(3);

    one.left = two;
    one.right = three;

    //myTree.root = new Node(10);
    console.log(myTree);
  });
});
