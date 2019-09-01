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
 // if(this.top) {
//      newTop.next = this.top
//  } 
//  this.top = newTop;

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
  //Queues

  enqueue(value) {
      const newRear = new Node(value);

      if(this.rear) {
         newRear.next = this.rear;
         this.rear = newRear;
      } else {
          this.rear = newRear;
          this.front = newRear;

      }
  }

  deque() {
      if(this.front) {
          let temp = this.front;
      }
  }




}



module.exports = Stack;
