const express = require('express');
const path = require('path');
const api = require('./routes/index.js');

const PORT = 3001; // serving port

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);