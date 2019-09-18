'use strict';

const Node = require('./node');

class BinaryTree {
  constructor() {
    this.root = null;
  }


  findMax() {
    //Hanna - If the Binary tree is empty return null
    if( this.root === null ) {
      return null;
    }

    //Hanna - If the Binary tree only contains one node which is the root, return the value of the root

    else if( this.root.left === null && this.root.right === null ) {
      return this.root.value;
    }

    //Hanna - traverse the tree and look for the max values keeping in mind of equal values
    else {
        
        let current = this.root;

        const searchTree (current) {

            

        }

        }





    }
  }
}







































//Hanna - this is the main function to find distance between parent and child nodes
const pathLength = (root, parent,child) => {
  if(root === null) {
    return null;
  }
  if(root.value === parent) {
    return countPathLength(root, child, 0);
  } else {
    return pathLength(root.left, parent, child)
      || pathLength(root.right, parent, child);
  }
};

//Hanna - this helper function helps initiate the length counter when we find the parent node
const countPathLength = (root, child, lengthBetween) => {
  if(root === null) {
    return null;
  }

  //Hanna - this is our base case, when you find the child node, return the path length between parent and child
  if(root.value === child) {
    return lengthBetween;

  } else {
    //Hanna - this is the recursive case. Keep looking until you find the child. Increment the counter by one for each node that you visit.
    return countPathLength(root.left, child, lengthBetween +1)
      || countPathLength(root.right,child, lengthBetween + 1 );
  }
};

module.exports = pathLength;
module.exports = countPathLength;
