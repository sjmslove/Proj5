/**
 *   @author Smith, Sierra (sjsmith8147@gmail.com)
 *   @version 0.0.2
 *   @summary Project 5 || created: 11.22.2016
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let bus = [];
let numPassengers, numZones, total;

function main(){
    setNumPassengers();
    setNumZones();
    populateBus();
    setTotal();
    printTotal();
}

main();

function setNumPassengers(){
    numPassengers = Number(PROMPT.question(`\n How many passengers? `));
}
function setNumZones(){
    numZones = Number(PROMPT.question(`\n How many zones are you crossing? `));
}

function populateBus() {
    const TOTAL_PASSENGERS = 3,
        TOTAL_ZONES = 3;
    for (let i = 0; i < TOTAL_PASSENGERS; i++) {
        bus[i] = [];
        if (i === 0) {
            for (let j = 0; j < TOTAL_ZONES; j++) {
                if (j === 0) {
                    bus[i][j] = 7.5;
                } else if (j === 1) {
                    bus[i][j] = 10;
                } else if (j === 2) {
                    bus[i][j] = 12;
                } else {
                    bus[i][j] = 12.75;
                }
            }
        } else if (i === 1) {
            for (let j = 0; j < TOTAL_ZONES; j++) {
                if (j === 0) {
                    bus[i][j] = 14;
                } else if (j === 1) {
                    bus[i][j] = 18.5;
                } else if (j === 2) {
                    bus[i][j] = 22;
                } else {
                    bus[i][j] = 23;
                }
            }
        } else if (i === 2) {
            for (let j = 0; j < TOTAL_ZONES; j++) {
                if (j === 0) {
                    bus[i][j] = 20;
                } else if (j === 1) {
                    bus[i][j] = 21;
                } else if (j === 2) {
                    bus[i][j] = 32;
                } else {
                    bus[i][j] = 33;
                }
            }
        } else {
            for (let j = 0; j < TOTAL_ZONES; j++) {
                if (j === 0) {
                    bus[i][j] = 25;
                } else if (j === 1) {
                    bus[i][j] = 27.5;
                } else if (j === 2) {
                    bus[i][j] = 36;
                } else {
                    bus[i][j] = 37;
                }
            }
        }
    }
}

function setTotal(){
    total = bus[numPassengers-1][numZones];
}


function printTotal(){
    console.log(`\n ${total}`);
}