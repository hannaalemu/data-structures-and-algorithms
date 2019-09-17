'use strict';

function findRepeat (string)  {

//Hanna - first we split the string to individual words 
let wordsArr = string.split(' ');

//Hanna - initiate a hash map so that we can use key-value pairs
const hash = new Map();

//Hanna - this array will hold the repeated words of the string
const results = [];

//Hanna - EDGE-CASE - The string is empty
if(string.length === 0) {
    return results;
}
//Hanna - other wise...
 else {

    for( let i = 0; i < wordsArr.length; i++ ) {
       //Hanna - if the word doesn't exist in  the split array, put the word in the hash map
        if(hash.get(wordsArr[i]) === undefined) {
            hash.set(wordsArr[i], true);
        
        }else {
            //Hanna - if the word exists in the hash map, get it
            const getValue = hash.get(wordsArr[i]);

            if(getValue !== undefined) {
                hash.set(wordsArr[i], !getValue);
            }
        } 
    }
//Hanna - loop over the hash array, if the value doesnt exist, push the word into the repeated words array
    hash.forEach(( value, key ) => {
        if(!value) {
            results.push(key);
        }
    });

    } 
    return results;

}

module.exports = findRepeat;