const express = require('express');
const path = require('path');
const api = require('./routes/index.js');
const {clog} = require('./middleware/clog');

const PORT = process.env.PORT || 3000; // serving port

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);
app.use(clog);
app.use(express.static('public'));


// getter for the notes page
app.get('/notes', (req, res) =>{
  const currPath = path.join(__dirname, "/public/notes.html");
    console.info("get request for notes, sending them file at: ", currPath);
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);