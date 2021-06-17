import { parse, format, isLeap, difference } from 'https://deno.land/std@0.99.0/datetime/mod.ts'

import { SECOND, MINUTE, HOUR,DAY, WEEK } from 'https://deno.land/std@0.99.0/datetime/mod.ts'

// euro standard of time

let getPrettierData = (date: Date): string => {
    return format(date, "dd-MM-yyyy");
}

let getFuncFromDate = (date: string) => {
    return parse(date, "dd-MM-yyyy"); 
}

let Leap = (date: string): boolean => {
    return isLeap(new Date(date))
}

// difference 

const date0 = new Date("2018-05-14");
const date1 = new Date("2020-05-13");

difference(date0, date1);
// => returns {
//   milliseconds: 63072000000,
//   seconds: 63072000,
//   minutes: 1051200,
//   hours: 17520,
//   days: 730,
//   weeks: 104,
//   months: 23,
//   quarters: 5,
//   years: 1
// }


// get values

console.log(SECOND); // => 1000

console.log(MINUTE); // => 60000 (60 * 1000)

console.log(HOUR); // => 3600000 (60 * 60 * 1000)

console.log(DAY); // => 86400000 (24 * 60 * 60 * 1000)

console.log(WEEK); // => 604800000 (7 * 24 * 60 * 60 * 1000)