/*
This script should do the following:

    Take one argument on the command line named --number.
    If no argument is given, it should flip once by default.
    The result on STDOUT should be an array of all of the flips in sequence followed by an object summarizing the flips.

*/

import { coinFlips, countFlips } from "./modules/coin.mjs";


try {
    let number = 1; 
    const arg = process.argv.slice(2)[0].slice(9);
    if( number != null){
        number = arg;
        console.log(countFlips(coinFlips(number)));
    }
} catch (error) {
    console.log(countFlips(coinFlips(1)));
}




