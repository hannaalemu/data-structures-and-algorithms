'use strict';

const {BinaryTree, findLeaves} = require('./findleaves');
const node = require('./node');

describe('Binary tree', () => {
  test('it can find all leaves in a tree', () => {

    let tree = new BinaryTree();
    tree.root = new node(10);

    const eleven = new node(11);
    const one = new node(1);
    const two = new node(2);
    const three = new node(3);
    const four = new node(4);
    const five = new node(5);
    const six = new node(6);
    const seven = new node(7);
    const eight = new node(8);

    tree.root.left = one;
    tree.root.right = eleven;
    one.left = two;
    one.right = three;

    two.left = four;
    
    three.left = five;
    three.right = six;

    six.left = seven;
    seven.right = eight;

    console.log(findLeaves(tree.root));
    expect(findLeaves(tree.root)).toEqual([4, 5, 8, 11]);

  });
});
