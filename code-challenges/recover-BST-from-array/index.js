'use strict';

class Node 
{ 
    constructor(value) 
    { 
        this.value = value; 
        this.left = null; 
        this.right = null; 
    } 
} 

let arr = [ 6, 8, 9, 10, 11, 13, 15]


  function findMid(array) {
    let mid = Math.floor(array.length / 2);
    return mid;
  }

function recoverBST (array, root) {

// console.log(findMid(array));

  let leftHalf = array.slice(0, (findMid(array)));
  let rightHalf = array.slice(findMid(array) + 1);
// console.log(leftHalf, rightHalf)
  // let root;
  if(!root) {
  root = new Node(array[findMid(array)]);
  }
  root.left = new Node(leftHalf[findMid(leftHalf)]);
  root.right = new Node(rightHalf[findMid(rightHalf)]);

  if( array.length === 3) {
    root.left = new Node(array[0]);
    root.right = new Node(array[2]);
    console.log('here', root);
    return root;
  } else {
    recoverBST(leftHalf, root.left);
    recoverBST(rightHalf, root.right);
  }
  return root;
}

console.log(recoverBST(arr));
