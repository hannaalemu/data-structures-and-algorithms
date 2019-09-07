'use strict';

const Node = require('./node');
const LinkedList = require('./linkedlist');

// linkedlistOne = new LinkedList();
// linkedlistTwo = new LinkedList();

const mergeLists = (linkedlistOne, linkedlistTwo) => {
  //Hanna - Edge cases
  if(linkedlistOne.head ===null && linkedlistTwo.head ===null) {
    return;
  } else if(linkedlistOne.head ===null && linkedlistTwo) {
    return linkedlistTwo;
  } else if(linkedlistOne && linkedlistTwo.head === null) {
    return linkedlistOne;
  } else {
    let headOne = linkedlistOne.head;
    let headTwo = linkedlistTwo.head;
    let tracker;

    while(headOne.next && headTwo.next) {
      tracker = headOne.next;
      headOne.next = headTwo;
      headOne = tracker;
      tracker = headTwo.next;
      headTwo.next = headOne;
      headTwo = tracker;
    }

    if(headOne.next === null) {
      headOne.next = headTwo;
      return linkedlistOne;
    }
    else{
      return linkedlistTwo;
    }
  }
};
module.exports = mergeLists;
