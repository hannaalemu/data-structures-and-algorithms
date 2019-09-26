'use strict';

import { isModuleDeclaration } from "@babel/types";

class AnimalShelter {


  constructor() {
    this.dogQueue = new Queue();
    this.catQueue = new Queue();
    this.id = 0;
  }

  enqueue(animal) {
    animal.id = this.id;
    this.id++;

  }

  dequeue(pref) {
    if(pref != 'dog' && pref != 'cat') {
      
      const nextDog;
      const nextCat;

    }

    if( nextDog. id < nextCat.id ) {
      return nextDog;
    }

  }
  

}

module.exports = AnimalShelter;