'use strict';

const Node = require('./node');

const Stack = require ('./stack');

function multibrackets(input) {

  const stack = new Stack();

  if(typeof(input) !== String || input.length < 2) {
    return false;
  } else {
    for(let i = 0; i <=input.length; i++) {
      if(input[i] === '(' || input [i] === '[' || input[i] === '{') {
        stack.push(input[i]);
      }
      if(input[i] ===')') {
        if(stack.peek() === '(') {
          stack.pop();
        }

        if(input[i] ===']') {
          if(stack.peek() === '[') {
            stack.pop();
          }
        }
        if(input[i] ==='}') {
          if(stack.peek() === '{') {
            stack.pop();
          }

        }

        if(stack.peek === null) {
          return true;
        }
        else return false;
      }
    }
  }
}

module.exports = multibrackets;
