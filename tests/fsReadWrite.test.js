const {readDb, writeDb, appendDb} = require('../lib/fsReadWrite');
const Note = require('../lib/note');
const fs = require('fs');



const PATH_TO_DB = '../db/db.json';
jest.mock("fs");

describe ("Read and Write", () => {
    
    it("should write files to the data base", () => {
        
        const beatles = [
            new Note("Paul", "He lived and let die"),
            new Note("John", "Quite the dreamer, he imagined"),
            new Note("George", "He had a thing about taxes"),
            new Note("Ringo", "He lived on a Yellow Submarine")
        ];
        
        writeDb(beatles);
        expect(fs.writeFile).lastCalledWith(
            PATH_TO_DB, // path
            JSON.stringify(beatles), // the notes
            "utf-8", // encoding
            expect.any(Function) // error handling function
        );
    });

    it ("should read the database and return it", async () => {
        
        const beatles = [
            new Note("Paul", "He lived and let die"),
            new Note("John", "Quite the dreamer, he imagined"),
            new Note("George", "He had a thing about taxes"),
            new Note("Ringo", "He lived on a Yellow Submarine")
        ];
        
        fs.readFile.mockReturnValue(JSON.stringify(beatles));
        const fileArr = await readDb().then(str =>{return str;}); 
        
        expect(fs.readFile).lastCalledWith(
            '../db/db.json', {encoding: "utf-8"}
        );

        expect(fileArr).toEqual(beatles);
    });  
    
    it ("should append a new value to the database", () => {
        const beatles = [
            new Note("Paul", "He lived and let die"),
            new Note("John", "Quite the dreamer, he imagined"),
            new Note("George", "He had a thing about taxes"),
            new Note("Ringo", "He lived on a Yellow Submarine")
        ];
        
        fs.readFile.mockReturnValue(JSON.stringify(beatles));
        
        const note = new Note("Pete", "He didn't have the best of timing");
        beatles.push(note);
        const retStr = JSON.stringify(beatles);
        appendDb(note);
        expect(fs.writeFile).lastCalledWith(
            PATH_TO_DB, // path
            retStr, // the notes
            "utf-8", // encoding
            expect.any(Function) // error handling function
        );
    });
});