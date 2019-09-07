'use strict';

const node = require('./node');

class BinaryTree {
  constructor() {
    this.root = null;
  }
}

const findLeaves = (root) => {
  let leavesArray = [];
  if(root.left === null && root.right === null) {
    leavesArray.push(root.data);
  }
  else{
    searchTree(root, leavesArray);
  }
  return leavesArray;
};

const searchTree = (current, leavesArray) => {
  if(current === null) {
    return;
  }
  if(current.left === null && current.right === null) {
    leavesArray.push(current.data);
    return;
  }
  searchTree(current.left, leavesArray) || searchTree(current.right, leavesArray);
};

module.exports = {BinaryTree, findLeaves};
