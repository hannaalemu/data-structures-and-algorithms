'use strict';

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  append(value) {
    let current = this.root;
    if(current === null) {
      this.root = new Node(value);
    }
    else {
      const searchTree = function(current) {
        if(value < current.data) {
          if(current.left === null) {
            current.left = new Node(value);
            return;
          }
          else if(current.left !== null) {
            return searchTree(current.left);
          }
        }

        else if(value > current.data) {
          if(current.right === null) {
            current.right = new Node(value);
            return;

          } else if( current.right !== null) {
            return searchTree(current.right);
          }
        }

      };
    }
  }

}

module.exports = BinaryTree;
