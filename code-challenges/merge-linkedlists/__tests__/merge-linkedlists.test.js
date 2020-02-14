'use strict';

const LinkedList = require('../linkedlist');
const mergeLists = require('../merge-linkedlist');
const Node = require('../node');


describe('merge-linkedlists.js', () => {

  test('can merge two linked lists', () => {
    const linkedlistOne = new LinkedList();
    const linkedlistTwo = new LinkedList();
    linkedlistOne.insert(1);
    linkedlistOne.insert(2);
    linkedlistOne.insert(3);
    linkedlistOne.insert(4);
    linkedlistOne.insert(5);

    linkedlistTwo.insert(6);
    linkedlistTwo.insert(7);
    linkedlistTwo.insert(8);
    linkedlistTwo.insert(8);
    linkedlistTwo.insert(10);

    const result = mergeLists(linkedlistOne, linkedlistTwo);
    expect(result.head.value).toEqual(5);
    expect(result.head.next.value).toEqual(10);
  });

  test('returns null if lists are empty', () => {
    const linkedlistOne = new LinkedList();
    const linkedlistTwo = new LinkedList();

    const result = mergeLists(linkedlistOne, linkedlistTwo);

    expect(result).toEqual(null || undefined);
  });

  test('returns the merged list if the first is longer' , () => {
    const linkedlistOne = new LinkedList();
    const linkedlistTwo = new LinkedList();

    linkedlistOne.insert(1);
    linkedlistOne.insert(2);
    linkedlistOne.insert(3);

    linkedlistTwo.insert(6);
    linkedlistTwo.insert(7);

    const result = mergeLists(linkedlistOne, linkedlistTwo);

    expect(result.head.value).toEqual(7);
    expect(result.head.next.next.value).toEqual(1);
  });

});
