'use strict';

const LinkedList = require('../linked-list');

// const linkedList = new LinkedList();

describe('linked-list.js', () => {
    let list = new LinkedList;
    list.kthFromEnd();

    expect(list.head.value).toEqual()

// });

describe('linked-list.js', () => {

  let newList = new LinkedList();

  test('can create an empty list', () => {

    let nullList = new LinkedList();
    expect(nullList.head).toEqual(null);
  });

  test('insert into list', () => {

    let nullList = new LinkedList();
    nullList.insert(1);
    expect(nullList.head.value).toEqual(1);
    expect(nullList.head.next).toEqual(null);
  });

  test('find kth node value', () => {

    let nullList = new LinkedList();
    nullList.insert(1);
    nullList.insert(2);
    nullList.insert(3);
    nullList.insert(4);
    nullList.insert(5);

    expect(nullList.kthFromEnd(0)).toEqual(5);
  });


});
