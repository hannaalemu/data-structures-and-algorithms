'use strict';

const linkedList = require('./index.js');

describe ('linked list class', () => {
    it ('can instantiate a new linked list', () => {
        let test = new linkedList();

       expect(test.head).toBe(null);
    });

    it ('Can properly insert into the linked list', () => {
        let test = new linkedList();

        test.insert(10);

       expect(test.head.value).toBe(10);
    });

    it ('The head property will properly point to the first node in the linked list', () => {
        let test = new linkedList();

        test.insert(10);
        test.insert(20);
        test.insert(30);

       expect(test.head.value).toBe(10);
    });

    it ('Can properly insert multiple nodes into the linked list', () => {
        let test = new linkedList();

        test.insert(10);
        test.insert(20);
        test.insert(30);

       expect(test.head.next.next.value).toBe(30);
    });
    
    it ('Will return true when finding a value within the linked list that exists', () => {
        let test = new linkedList();

        test.insert(10);
        test.insert(20);
        test.insert(30);

        let result = test.includes(20);

       expect(result).toBe(true);
    });

    it ('Will return false when searching for a value in the linked list that does not exist', () => {
        let test = new linkedList();

        test.insert(10);
        test.insert(20);
        test.insert(30);

        let result = test.includes(50);

       expect(result).toBe(false);
    });

    it ('Can properly return a collection of all the values that exist in the linked list', () => {
        let test = new linkedList();

        test.insert(10);
        test.insert(20);
        test.insert(30);

        let result = test.toString();
    
        expect(result).toBe('102030');
    });

})