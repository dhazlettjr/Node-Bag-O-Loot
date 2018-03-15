'use strict';

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database('loot-bag.sqlite', () => {
    console.log("Connection to db successful");
});

module.exports.getKids = () => {
    return [{}];
}