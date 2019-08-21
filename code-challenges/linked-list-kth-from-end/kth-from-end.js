'use strict';

const Node = require('./node');

class LinkedList {
    constructor() {
        this.head = null;
    }
};

kthFromEnd(k) {
    const headNode = this.head;
    if(!headNode || headNode.next === null && k ===0 || k < 0) {
        return;
    } else if(headNode.next === null && k ===0) {
        return headNode.value;
    } else {
        let count = 0;
        while(currentNode.next != 0) {
        currentNode = this.head;
        currentNode = this.next;
        console.log(count++)
    } 
  }}

module.exports = LinkedList;