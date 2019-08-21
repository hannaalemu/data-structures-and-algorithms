'use strict';

const Node = require('./node');

class LinkedList {
    constructor() {
        this.head = null;
    }
};

//Hanna - this method will add a node with the value of (value) to the end of the linked list

append(value) {
    if(this.head === null) {
        this.head = new Node(value);
    } else {
        this.appendValueHelper(value, this.head);
    }
}
