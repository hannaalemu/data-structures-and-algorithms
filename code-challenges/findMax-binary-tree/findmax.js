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

      const maxLeft = this.findMax(this.root.left);
      const maxRight = this.findMax(this.root.right);

      return Math.max(this.root.value, maxLeft, maxRight);
    }


  }

}

module.exports = BinaryTree;
