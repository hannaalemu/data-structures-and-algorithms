'use strict';

const Stack = require('../multibracket');

const Node = require('../node');


describe('stack', () => {

    test('it can push opening bracket to the top of the stack', () => {
      let stack = new Stack;
      
      let input = 'Banana{(())}';

      stack.multibrackets(input);
      
    });
});  