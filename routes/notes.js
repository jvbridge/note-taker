const nt = require('express').Router();
const {readDb, writeDb, appendDb} = require('../lib/fsReadWrite');
const Note = require('../lib/note');
const PATH_TO_DB = './db/db.json';

// GET route for getting all of the notes
nt.get('/', async (req, res) => {
    // read from db
    noteJsonStr = await readDb(PATH_TO_DB, 'utf-8');
    // parse the string and then send it back
    res.json(JSON.parse(noteJsonStr));
});


nt.get('/:note_id', async (req, res) =>{
    // reference for the local files
    const noteId = req.params.note_id;

    console.info("got a request for: ", noteId);
    
    notesJsonStr = await readDb(PATH_TO_DB, 'utf-8');
    notesJson = JSON.parse(notesJsonStr);
    const ret = notesJson.filter((element) => {
        return (element.id == noteId);
    });

    if (ret){
        res.json(ret);
    } else {
        res.json("no note with that id");
    }
});

// POST route for submitting a new note
nt.post('/', (req, res) => {
    const {title, text} = req.body;
    console.info("got a post request, ", req.body);
    const note = new Note(title, text);
    appendDb(note, PATH_TO_DB);
    res.json("added new note, id: ", note.getId());
});

nt.delete('/:note_id', async (req, res) => {
    const noteId = req.params.note_id;
    console.info("got a delete request for: ", noteId);
    notesJsonStr = await readDb(PATH_TO_DB, 'utf-8');
    notesJson = JSON.parse(notesJsonStr);
    
    const ret = notesJson.filter((curr) => {return (curr.id == noteId);});
    
    if (ret.length > 1){
        res.json("Error: found multiple notes with that ID, deleting both");
    }

    if (ret.length === 0){
        res.json("Error: found no note with that ID");
    }

    if (ret.length === 1){
        res.json("Found one note and deleted it");
    }
    const newDB = notesJson.filter(curr => {return (curr.id != noteId);});
    writeDb(PATH_TO_DB, newDB);
});

module.exports = nt;