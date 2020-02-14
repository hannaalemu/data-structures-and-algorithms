'use strict';

const Node = require('./node');

class LinkedList {
    constructor() {
        this.head = null;
    }

    //Hanna - adds a value to the linked list
    insert(value) {
        if(this.head === null) {
            this.head = new Node(value);
        }

        else {
            let current = this.head;
            while(current.next) {
                current = current.next;
                }
                current.next = new Node(value);
            }
        
    }

    //Hanna - checks if a value exists anywhere in the linked list
    includes(data) {
        let current = this.head;
        if(current === null) {
            return 'empty linked list';
        }
        else {
            while(current) {
                if( current.value === data ){
                    return true;
                }
                else {
                    current = current.next
                }
            }
            return false;
        }

    }

    //Hanna - returns a string with all the values in the linked list
    toString() {
        let arr = [];
        let current = this.head;
        if( current === null) {
            return 'empty linked list'
        }
        else {
            while(current) {
                arr.push(current.value);
                current = current.next;
            }
        }
        return arr.join('');
    }
}

module.exports = LinkedList;
