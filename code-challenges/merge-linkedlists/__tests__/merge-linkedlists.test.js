'use strict';

const LinkedList = require('../merge-linkedlist');
const Node = require('../node');
const l

describe('merge-linkedlists.js', () => {

  let linkedlistOne = new LinkedList();
  let linkedlistTwo = new LinkedList();

  test('can merge two linked lists', () => {
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

    mergeLinkedLists(linkedlistOne, linkedlistTwo);
    expect(linkedlistOne.head.next.value).toEqual(5);
    expect(linkedlistOne.head.next.next.value).toEqual(2);
  });
});
