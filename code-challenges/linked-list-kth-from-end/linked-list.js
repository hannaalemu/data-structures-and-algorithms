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

  kthFromEnd(k) {
    let newNode = new Node();

    if(this.head ===null || this.head.next ===null && k ===0 || k < 0) {
      return 'Undefined';

    } else if(this.head.next === null && k === 0) {

      return this.head.value;

    } else {

      let currentNode = this.head;
      let kthNode = this.head;
      let count = 0;

      if(currentNode !== null) {

        while (count <= k) {
          if(currentNode) {
            currentNode = currentNode.next;
            count++;
          } else {
            return 'undefined';
          }
        }
        while(currentNode) {
          currentNode = currentNode.next;
          kthNode = kthNode.next;
        }
      }
      return kthNode.value;
    }
  }
}

module.exports = LinkedList;
