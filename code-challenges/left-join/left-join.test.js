'use strict';

const leftJoin = require ('./left-join');

describe ('Left join two hashmaps', () => {

  it( 'Can return the left join of two maps', () => {
    let mapOne = new Map();

    mapOne.set('firstName', 'Hanna');
    mapOne.set('LastName', 'ALemu');

    let mapTwo = new Map();

    mapTwo.set('firstName', 'Nate');
    mapTwo.set('Age', '22');

    let results = leftJoin(mapOne, mapTwo);

    console.log(results);
    console.log(mapOne);

  });


});
