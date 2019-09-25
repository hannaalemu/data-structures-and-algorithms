'use strict';

const {BinaryTree, findIntandUni} = require('./tree-inter');
const Node = require('./node');

describe('FInd union and intersection', () => {

  test('it returns null if empty tree', () => {

    let tree = new BinaryTree();
    let tree2 = new BinaryTree();

  expect(findIntandUni( tree.root, tree2.root)).toEqual(undefined);

  });

  test('it returns the first tree is the other one is empty', () => {

    let tree = new BinaryTree();
    tree.root = new Node(10);

    let tree2 = new BinaryTree();

  expect(findIntandUni( tree.root, tree2.root)).toEqual(tree);

  });

  test('it returns the union and the intersection of two trees', () => {

    let tree = new BinaryTree();

    tree.root = one;
    one.left = two;
    one.right = three;

    two.left = four;
    three.left = five;
    
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);

    let tree2 = new BinaryTree();
    tree2.root = eleven;

    eleven.left = six;
    eleven.right = seven;

    seven.left = threethree;
    seven.right = twoTwo

    const eleven = new Node(11);
    const threethree = new Node(3);

    const six = new Node(6);
    const seven = new Node(7);
    const twoTwo = new Node(2);

  expect(findIntandUni( tree.root, tree2.root)).toEqual({union: [1, 2, 3, 4, 5, 6, 7, 11 ], intersection: [2, 3]});

  });

});
