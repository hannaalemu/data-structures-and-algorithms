'use strict';

const LinkedList = require('../linked-list');


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

  test('checks if a value is in the linked list', () => {
    let linkedList = new LinkedList();

    linkedList.insert(2);
    linkedList.insert(3);
    linkedList.insert(4);

    expect(linkedList.includes(3)).toEqual(true);
    expect(linkedList.includes(10)).toEqual(false);
    console.log(linkedList);
  });

});
