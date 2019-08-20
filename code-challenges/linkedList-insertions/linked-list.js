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

//Hanna - we will add a helper function to go through the linked list recursively

appendValueHelper(value, currentNode){
    //Hanna - Base case(when do we want the recusion to stop)
    if(currentNode.next === null) {
        currentNode.next = new Node(value);
        return;
    } else{
        //Hanna - If the Base case is not fullfilled(it didn't find the tail) keep recursing 
        this.appendValueHelper(value, currentNode.next);
    }
}

//Hanna - this function will append a new node before the node containing the value
    insertBefore(value, newValue) {
        const currentNode = this.head;

        if(currentNode === null) {
            this.head = new Node(newValue);
        } else if (currentNode.value === value && currentNode.next === null) {
            currentNode.value = newValue;
        } else {
            while(currentNode.next === null) {
                const previousNode = this.head;
                if(this.head.value === value) {
                    this.head = new Node(newValue);
                    this.head.next = previousNode;
                } else {
                currentNode.next = currentNode;
                }
            }
        }
    }
        

//Hanna - this function will append a new node after the node containing the value

    insertAfter(value, newValue) {
        const currentNode = this.head;
        if(currentNode === null) {
            this.head = new Node(newValue);
        } 
        else if(currentNode.value !== value && currentNode.next === null ) {
            
            currentNode.value = newValue;
        } else {
            while(currentNode.next != null) {
               
                if(currentNode.value !== value) {
                    this.next = currentNode.next;
                } else {
                    this.next = new Node(newValue);
                }
            }
        }
    }