'use strict';

let arr = [1, 3, 5, 10,9,7 ];

function reverseArray (arr) {

  for(let i = 0; i < (arr.length - 1) / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
};

reverseArray(arr);
