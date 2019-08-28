'use strict';

const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
  }
  //Hanna - this method will add a node with the value of (value) to the end of the linked list

  insert(value) {
    let newNode = new Node();

    if(this.head === null) {
      this.head = new Node(value);
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }


  module.exports = LinkedList;
  