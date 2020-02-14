'use strict';

const Stack = require('../stack');
const Queue = require('../queue');

describe('stack', () => {

  test('Can successfully push onto a stack', () => {
    let test = new Stack;
    test.push(1);
    
    expect(test.top.value).toBe(1)

  });

  test('Can successfully push multiple values onto a stack', () => {
    let test = new Stack;
    test.push(1);
    test.push(2);
    test.push(3);
    
    expect(test.top.next.next.value).toBe(3);

  });

  test('it can pop a node from top of the stack', () => {
    let test = new Stack;
    test.push(1);
    test.push(2);
    test.push(3);

    let result = test.pop();
    expect(result).toBe(3);
  });

  
  test('Can successfully empty a stack after multiple pops', () => {
    let test = new Stack;
    test.push(1);
    test.push(2);
    test.push(3);

    test.pop();
    test.pop();
    test.pop();

   console.log(test.pop());
   console.log(test.pop());
   console.log(test.pop());

  
  });

  test('Can successfully peek the next item on the stacks', () => {
    let test = new Stack;
    test.push(1);
    test.push(2);
    test.push(3);

    let result = test.peek();
    expect(result).toBe(3);
  });

  test('Can successfully instantiate an empty stack', () => {
    let test = new Stack;
   
    expect(test.top).toBe(null);
  });

});

describe('Queue', () => {
  it('Can successfully enqueue into a queue', () => {
    let test = new Queue();

    test.enqueue(10);
    
    expect(test.front.value).toBe(10);

  });

  it('Can successfully enqueue multiple values into a queue', () => {

    let test = new Queue();

    test.enqueue(10);
    test.enqueue(20);
    test.enqueue(30);
    
    expect(test.front.next.next.value).toBe(30);

  });

  it('Can successfully dequeue out of a queue the expected value', () => {

    let test = new Queue();

    test.enqueue(10);
    test.enqueue(20);
    test.enqueue(30);

    let result = test.dequeueu();

    expect(result).toBe(10);
    
  });

  it('Can successfully peek into a queue, seeing the expected value', () => {
    let test = new Queue();

    test.enqueue(10);
    test.enqueue(20);
    test.enqueue(30);

    let result = test.peek();

    expect(result).toBe(10);
    
  });

  it('Can successfully empty a queue after multiple dequeues', () => {
    let test = new Queue();

    test.enqueue(10);
    test.enqueue(20);
    test.enqueue(30);

    test.dequeueu();
    test.dequeueu();
    test.dequeueu();

    expect(test.front).toBe(null);
    
  });

  it('Can successfully instantiate an empty queue', () => {

    let test = new Queue();

    expect(test.front).toBe(null);
    
  });

})
