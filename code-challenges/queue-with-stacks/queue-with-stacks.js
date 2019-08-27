'use strict';

const Stack = require('./stacks-and-queues');

class Pseudoqueue {
  constructor() {
    this.stackA = new Stack();
    this.stackB = new Stack();
  }

  enque(value) {
    this.stackA.push(value);
  }

  dequeue() {
    if(this.stackB.peek === null) {
      if(this.stackA.peek ===null) {
        return;
      } else if(this.stackA.peek !== null) {
        while(this.stackA.peek !== null) {
          let temp = this.stackA.pop();
          this.stackB.push(temp);
        }
        return this.stackB.pop();
      }
    }
  }
}

module.exports = Pseudoqueue;
