/*
This script should do the following:

    Take one argument on the command line named --number.
    If no argument is given, it should flip once by default.
    The result on STDOUT should be an array of all of the flips in sequence followed by an object summarizing the flips.

*/

import { coinFlips, countFlips } from "./modules/coin.mjs";


const arg = process.argv.slice(2)[0].slice(9);
arg['number']
const num = arg.number || 1; 
const results = coinFlips(num);
console.log(results);
console.log(countFlips(results));



