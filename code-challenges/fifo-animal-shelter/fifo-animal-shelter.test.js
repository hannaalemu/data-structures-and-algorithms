'use strict';

const AnimalShelter = require('./fifo-animal-shelter');

describe('animal shelter queue', () => {
  it('enqueues an animal to the end of the queue', () => {

    let animalShelter = new AnimalShelter();

    animalShelter.enqueue('dog');



  });

  it('dequeues the first enqueued animal if the preference is not set', () => {
    
    let animalShelter = new AnimalShelter();

    animalShelter.enqueue('dog');
    animalShelter.enqueue('cat');

    let result = animalShelter.dequeue();

    expect(result).toEqual('dog');


  });

  it('dequeues the preferred animal from the end of the queueu', () => {


    let animalShelter = new AnimalShelter();

    animalShelter.enqueue('dog');
    animalShelter.enqueue('cat');
    animalShelter.enqueue('dog');

    let result = animalShelter.dequeue('cat');

    expect(result).toEqual('cat');


  });


})