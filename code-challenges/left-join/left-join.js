'use strict';

function leftJoin(hashMapOne, hashMapTwo) {

  if(hashMapOne.has(hashMapTwo.Object.keys())) {

    return hashMapOne.set(hashMapTwo.Object.keys());
  }
  else {
    return hashMapOne;
  }

}

module.exports = leftJoin;
