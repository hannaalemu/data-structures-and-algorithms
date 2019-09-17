'use strict';

const findRepeat = require('../repeated-word');

describe (' Find repeated words', () => {
    it('returns empty array if the string is empty', () => {

        const testString = '';

        expect(findRepeat(testString)).toEqual([]);
    })
    
    it('can find repeated words in a string and return an array', () => {

        const testString = 'Hi I am hanna, nice to meet you ! How are you ?';

        expect(findRepeat(testString)).toEqual(['you']);
    }) 
    it('returns an empty array if there are no repeating words', () => {

        const testString = 'Hello, how are you?';

        expect(findRepeat(testString)).toEqual([]);
    })
})

