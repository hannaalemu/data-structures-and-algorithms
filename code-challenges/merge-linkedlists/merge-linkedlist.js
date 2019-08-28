'use strict';

const Node = require('./node');
const LinkedList = require('./linkedlist');

let linkedlistOne = new LinkedList();
let linkedlistTwo = new LinkedList();


class LinkedList {
    constructor() {
      this.head = null;
    }


    insert(value) {
        let newNode = new Node();
    
        if(this.head === null) {
          this.head = new Node(value);
        } else {
          newNode.next = this.head;
          this.head = newNode;
        }
      }
    
 mergeLinkedlists (linkedlistOne, linkedlistTwo) {
     //Hanna - Edge cases
if(linkedlistOne.head ===null && linkedlistTwo.head ===null) {
    return;
} else if(linkedlistOne.head ===null && linkedlistTwo) {
    return linkedlistTwo;
} else if(linkedlistOne && linkedlistTwo.head === null) {
    return linkedlistOne;
} else {
    let countOne = 0;
    let countTwo = 0;
//Hanna - count the length of the linked lists
while(currentOne) {
    let currentOne = linkedlistOne.head;
    currentOne.next = currentOne;
    return countOne++;
}
while(currentTwo) {
    let currentTwo = linkedlistTwo.head;
    currentTwo.next = currentTwo;
    return countTwo++;
}
if(countOne > countTwo) {
    while()
    let oneHead = linkedlistOne.head;
    let oneSecond = linkedlistOne.head.next;
    let twoHead = linkedlistTwo.head;
    let twoSecond = linkedlistTwo.head.next

    oneHead.next = twoHead;
    twoHead.next = oneSecond;
    oneSecond.next = twoSecond;
}
//Hann - if the second linked list is longer
else if(countOne < countTwo) {
    while(oneSecond) {
    let oneHead = linkedlistOne.head;
    let oneSecond = linkedlistOne.head.next;
    let oneThird = oneSecond.head.next.next;
    let twoHead = linkedlistTwo.head;
    let twoSecond = linkedlistTwo.head.next
    let twoThird = linkedlistTwo.head.next.next;


    oneHead.next = twoHead;
    twoHead.next = oneSecond;
    oneSecond.next = twoSecond;
    twoSecond.next = oneThird;
}
oneThird.next = twoThird

}
//Hanna - if the first linked list is longer
if(countOne > countTwo) {
    while(twoSecond) {
    let oneHead = linkedlistOne.head;
    let oneSecond = linkedlistOne.head.next;
    let twoHead = linkedlistTwo.head;
    let twoSecond = linkedlistTwo.head.next

    oneHead.next = twoHead;
    twoHead.next = oneSecond;
    oneSecond.next = twoSecond;
    twoSecond.next = oneThird;
    oneThird.next = twoThird
}
twoThird.next = oneThird;
}
//Hanna - if they are equal length
 else {
    while(oneSecond && twoSecond) {
        let oneHead = linkedlistOne.head;
        let oneSecond = linkedlistOne.head.next;
        let twoHead = linkedlistTwo.head;
        let twoSecond = linkedlistTwo.head.next
    
        oneHead.next = twoHead;
        twoHead.next = oneSecond;
        oneSecond.next = twoSecond;
    }
}
}
 }
}
module.exports = LinkedList;

