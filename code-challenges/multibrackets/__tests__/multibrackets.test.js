'use strict';

const Multibracket = require('../multibracket');

// const multibracket = new Multibracket();

const Node = require('../node');

describe('stack', () => {

  test('it can check a string for matching brackets', () => {

    let input = 'Banana{(())}';
    let input2 = 'hanna{{{'
    const result = Multibracket(input);
    const result2 = Multibracket(input2);
    expect(result).toEqual(false);
    expect(result2).toEqual(false);

  });
});
