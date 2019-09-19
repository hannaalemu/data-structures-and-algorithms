'use strict';

const removeDupes = (linkedlist) => {
  //Hanna - Edge cases
  
  if( !this.head) {
    return;
  }

  else if( !this.head.next) {

    return linkedlist;
  }

  else {

    const hash = new Map();

    let current = this.head;

    while( current && current.next ) {

      hash.keys.map( key => {

        if( current.value === key) {
          current = current.next;
        }
        else {

          hash.keys.push( current.value) ;

        }
      });
    }
    return linkedlist;

  }
};

module.exports = removeDupes;
