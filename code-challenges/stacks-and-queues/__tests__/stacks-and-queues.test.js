'use strict';

const Stack = require('../index');

describe('stack', () => {

  test('it can push node to the top of the stack', () => {
    let stack = new Stack;
    stack.push(1);
    stack.push(2);
    stack.push(3);

  });

  test('it can pop a node from top of the stack', () => {
    let stack = new Stack;
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop();
  });

  
  test('it can peek the value of the node on top of the stack', () => {
    let stack = new Stack;
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.peek();
  });
});
