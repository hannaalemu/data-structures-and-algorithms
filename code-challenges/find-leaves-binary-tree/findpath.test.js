'use strict';

const Node = require('./Node');

const pathLength = require('./findPath');
const countPathLength = require('./findPath');

describe('Find path between parent and child', () => {
  test('It can find the path between a parent and child node', () => {


    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);

    const six = new Node(6);
    const seven = new Node(7);

    const eight = new Node(8);


    // ----------------------------------------
    five.left = one;
    five.right = two;

    one.left = three;
    two.right = four;
    two.left = six;
    four.left = seven;
    four.right = eight;

    expect((pathLength(five,5, 8))).toEqual(8);
  });

});

