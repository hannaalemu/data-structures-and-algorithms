'use strict';

const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
  }
  //Hanna - this method will add a node with the value of (value) to the end of the linked list

  insert(value) {
    const newHead = new Node(value);
    if(this.head === null) {
      this.head = newHead;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
  }

}
module.exports = LinkedList;


