'use strict';

const Node = require('./node');

class Stack {
  constructor(){
    this.top = null;
  }

  push( value ){

    if(this.top === null) {
      this.top = new Node (value);

    } else{
      pushHelper(this.top, value);
    }

    function pushHelper(currentNode, value) {
      if(currentNode.next === null) {
        let newTail = new Node(value);
        currentNode.next = newTail;
        return;
      } else {
        currentNode = currentNode.next;
        pushHelper(currentNode, value);
      }
    }
  }

  pop() {
    let currentNode = this.head;

    while(currentNode) {
      if(currentNode.next === null) {
        currentNode.value = null;
      } else {
        if(tail.next ===null) {
          let previousNode;
          let tail;
          previousNode.next= tail;
          console.log(tail.value);
          previousNode.next = null;
        }
      }
    }

  }

  peek() {

    let currentNode = this.head;

    while(currentNode) {
      if(currentNode.next === null) {
        return(currentNode.value);
      } else {
        currentNode = this.head;
        currentNode = currentNode.next;
      }
    }
  }

}




module.exports = Stack;
