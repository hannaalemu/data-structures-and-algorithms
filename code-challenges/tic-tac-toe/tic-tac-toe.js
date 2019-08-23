'use strict';

findWinner(arr) {

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr[i].length; j++) {

            if (arr[i][j] === arr[i][j + 1]) {

                return( arr[i][j]);

            } else if (arr[i][j] === arr[i + 1][j]) {

                return(arr[i][j]);

            } else if(arr[i][j]=== arr[i+1][j + 1]) {

                return(arr[i][j]);

            } else if(arr[i][j] === arr[i - 1][j - 1]){

                return(arr[i][j]);

            } else {
                
                console.log('No One Won!');
            }
        }
    }
};