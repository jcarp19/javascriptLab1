"use strict";

let hours = 40;
let wage = 15;
let overtime = (hours - 40) * (wage * 1.5);
let regularPay = 40 * wage;


if (hours <= 40) {
    console.log(`Weekly pay: $${hours * wage}.`)
    let weekly = hours * wage;
    console.log(`It would take ${Math.ceil(1000000 / weekly)} weeks to earn $1,000,000`)
} else {
    console.log(`Weekly pay: $${overtime + regularPay}`)
    let weekly = overtime + regularPay;
    console.log(`It would take ${Math.ceil(1000000 / weekly)} weeks to earn $1,000,000`)
}




