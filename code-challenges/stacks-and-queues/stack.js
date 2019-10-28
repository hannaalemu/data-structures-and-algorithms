'use strict';

const Node = require('./node');

class Stack {
  constructor(){
    this.top = null;
  }

  push( value ){

   if(this.top === null) {
     this.top = new Node(value);
   }
   else {
     let current = this.top;

     while(current.next){
       current = current.next;
     }
     current.next = new Node(value);
   }
  }

  pop() {

    if(this.top === null) {
      return 'empty stak';
    }

   else if (this.top.next === null) {
     
    this.top === null;
    return;
  }
    else {

      let previous = this.top;
      let tail = this.top.next;
      
      while(tail.next !== null) {
        previous = tail;
        tail = tail.next;
      }

      let temp = tail;
      previous.next = null;
      return temp.value;
  }
}

  peek() {

    if( this.top == null) {
      return 'empty stack';
    }

    else {
      let current = this.top;
      while(current.next) {
        current = current.next;
      }
      return current.value;
    }
  }

  isEmpty() {
    if(this.top === null ){ 
      return 'empty stack';
    }

    else {
      return true;
    }
  }

}




module.exports = Stack;
