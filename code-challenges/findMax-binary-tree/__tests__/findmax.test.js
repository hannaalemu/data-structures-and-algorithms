'use strict';

const Node = require('../Node');

const BinaryTree  = require('../findmax');


describe('Find maximum value in the Binary tree', () => {

  test('It returns null or undefined if the binary tree is empty', () => {
    console.log(BinaryTree);
    let testTree = new BinaryTree();

    expect(testTree.findMax()).toEqual(null);

  });

  test('It returns the root if the Binary tree has ony root node', () => {

    let testTree = new BinaryTree();

    testTree.root = new Node(10);

    expect(testTree.findMax()).toEqual(10);

  });

  test('It returns the maximum value in the Binary tree', () => {


    let testTree = new BinaryTree();
    
    const five = new Node(5);
    testTree.root = five;

    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);

    const four = new Node(4);

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

    expect(testTree.findMax()).toEqual(8);

  });

});

