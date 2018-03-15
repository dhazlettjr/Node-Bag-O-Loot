const sqlite3 = require('sqlite3').verbose();
const {createTables} = require('./makeTable');

(function createDb() {
    new sqlite3.Database('loot-bag.sqlite', () => {
    createTables()
    .then((data) => {
    })
    .catch ((err) => {
        console.log("opps", err);
    });
    });
}());
