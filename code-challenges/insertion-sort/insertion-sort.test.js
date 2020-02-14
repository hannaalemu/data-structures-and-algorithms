'use strict';

const insertSort = require('./insertion-sort');

describe('insert sort', () => {
  it('can sort an array containing positive integers', () => {

    let test = [4, 5, 7, 0, 3];

    let results = insertSort(test);

    expect(results).toEqual([0, 3, 4, 5, 7]);

  });
  it('can sort an array containing negative numbers', () => {

    let test = [4, -5, -7, 0, -3];

    let results = insertSort(test);

    expect(results).toEqual([-7, -5, -3, 0, 4]);

  });
  it('returns the array if it is an empty array', () => {

    let test = [];

    let results = insertSort(test);

    expect(results).toEqual([]);

  });
  it('returns the array if the array has only one element', () => {

    let test = [4];

    let results = insertSort(test);

    expect(results).toEqual([4]);

  });

});
