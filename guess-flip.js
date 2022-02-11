/*
This script should do the following:

    Take one argument on the command line named --call that will only accept .
    If no argument is given, or something other than “heads” or “tails” is passed with --call, return an error message (see below for example).
    Compare the call with a flip and report the result to STDOUT (see below)

*/

import { flipACoin, coinFlip } from "./modules/coin.mjs";


try {
    const argv = process.argv.slice(2)[0].slice(7);
    if (argv == 'heads' || argv == 'tails') {
        console.log(flipACoin(argv)); 
    }
} catch (error) {
    console.log('Error: no input\nUsage: node guess-flip --call=[heads|tails]')
}