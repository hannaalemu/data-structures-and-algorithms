'use strict';

const LinkedList = require('../linkedlist');
const removeDupes = require('../find-dupes');
const Node = require('../node');


describe('remove duplicates in a linked list', () => {

  test('it returns if the linked list is empty ', () => {


    const linkedlistOne = new LinkedList();

    const result = removeDupes(linkedlistOne);


    expect(result).toEqual(undefined);
  });

  test('it returns the head node if the list only has one node', () => {


    const linkedlistOne = new LinkedList();
    linkedlistOne.insert(10);

    const result = removeDupes(linkedlistOne);


    expect(result.head.value).toEqual(10);

  });

  test('it returns the linked list after the duplicates have been removed', () => {

    const linkedlistOne = new LinkedList();
    const one = new Node(1);
    const two = new Node(2);
    const oneDupe = new Node(1);
    const three = new Node(3);

    linkedlistOne.head = one;
    one.next = two;
    two.next = oneDupe;
    oneDupe.next = three;

    const result = removeDupes(linkedlistOne);


    expect(result.head.next.next.value).toEqual(3);

  });

});
