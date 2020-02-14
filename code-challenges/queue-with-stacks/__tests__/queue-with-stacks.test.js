'use strict';

const Pseudoqueue = require('../queue-with-stacks');
const Stack = require('../stacks-and-queues');


describe('Pseudoqueue', () => {

  test('it can enqueue by pushing to stack A', () => {
    let testQueue = new Pseudoqueue();
    testQueue.enque(1);
    testQueue.enque(2);
    testQueue.enque(3);
    testQueue.enque(4);
    testQueue.enque(5);
    expect(testQueue.stackA.peek).toEqual(5);
    console.log(testQueue);
  });

  test('it can dequeue by removing from stackB', () => {
    let testQueue = new Pseudoqueue();
    testQueue.enque(1);
    console.log(testQueue);

    expect(testQueue.dequeue()).toEqual(null);
    expect(testQueue.peek).toEqual(null);
    console.log(testQueue);
  });
});
