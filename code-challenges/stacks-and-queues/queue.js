'use strict';

const Node = require('./node');

class Queue {
    constructor() {
        this.front = null;
    }

    //Hanna - add new node to back of queue FIFO
    enqueue(value) {
        if( this.front === null) {
            this.front = new Node(value);
        }
        else {
            let current = this.front;
            while(current.next) {
                current = current.next;
            }
            current.next = new Node (value);
        }

    } 

    //Hanna - remove first element and return it's value
    dequeueu() {
        if(this.front === null) {
            return 'empty queue';
        }
        else {
           let temp = this.front;
           this.front = this.front.next;

           return temp.value; 
        }
    }

    //Hanna - return value of the first enqueued node
    peek() {
        if(this.front === null) {
            return 'empty queue';
        }
        else {
            return this.front.value;
        }

    }

    //Hanna - check if a queue is empty or not
    isEmpty() {
        if(this.front === null) {
            return true;
        }
        else {
            return false;
        }
    }
}

module.exports = Queue;