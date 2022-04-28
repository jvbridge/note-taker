const fs = require('fs');
const util = require('util');

const PATH_TO_DB = '../db/db.json';

/**
 * Reads the JSON of the database and returns an array of it
 * @async
 * @returns {Array} - the db.json file should be an array
 */
const readDb = async function(){
    const dataStr = await fs.readFile(PATH_TO_DB, {encoding:"utf-8"});
    const data = JSON.parse(dataStr);
    return data;
};


const writeDb = function(objects) {
    fs.writeFile(PATH_TO_DB, JSON.stringify(objects), "utf-8", (err) => {
        err? console.error(err): console.info(`\nData written to ${destination}`);
    });
};

const appendDb = async function(objects) {
    const dbStr = await readDb().then((data) =>{
        return data;
    });
    const db = JSON.parse(dbStr);
    // if the data is an array
    if (Object.prototype.toString.call(objects) === '[object Array]'){
        // concatinate it and write it
        const toWrite = db.concat(objects);
        console.log("writing the data base: ", toWrite);
        writeDb(toWrite);
    } else {
        db.push(objects);
        console.log("argument isnt an array, pushing it", db );
        writeDb(db);
    }
};

module.exports = {readDb, writeDb, appendDb};