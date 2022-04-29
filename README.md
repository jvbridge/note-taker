# note-taker
A note taking app that anyone can modify!

## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [Technologies](#technologies-used)
* [License](#License)
* [Tests](#Tests)

## Installation

A deployed version can be found at https://floating-forest-47712.herokuapp.com/

To run it yourself you need to install [Node.js](https://nodejs.org/en/). After
you've done that download the repository and then run `npm install` in the 
directory you downloaded it to. Once that completes you can run it locally using
`npm start`, `npm watch`, or `node ./server.js` commands within the directory 
you installed it to. 

By default you can see it deployed to `localhost:3000`

## Usage

Once you've either installed the application or you've visited the [deployed 
website](https://floating-forest-47712.herokuapp.com/) The usage is straight
forward. First you'll be greated by a splash screen
<div style='max-height:450px; max-width:740px;overflow:hidden'>
    <img src='./assets/main_screen.png'>
</div>

You can either click the "get started" button or the title in the upper left,
both work to continue. They will send you to the note editing screen. 

<div style='max-height:450px; max-width:740px;overflow:hidden'>
    <img src='./assets/note_editor.png'>
</div>

By default a note will be made that has some basic information about the 
deployment. Clicking on each note will allow you to edit their information by 
propogating it to the main area.

You can also click the `+` button to clear that area.

Once you type a note a save icon will appear 

<div style='max-height:450px; max-width:740px;overflow:hidden'>
    <img src='./assets/note_progress.png'>
</div>

Clicking the floppy disk will allow you to write the file to the database. 

## Technologies used

|Technologies used |
|------------------|
|[![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)|
|[![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)](https://jestjs.io/)|
|[![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/)|
|[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/)|
|[![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/)|
|![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)|
|![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)|

The Database that is used isn't actually a real one. It's in fact just a JSON
file that gets edited by the API requests the client sends over. It doesn't use
local storage so anything you change will stay on everyone's computer. BUT 

## Credits

Markdown badges shamelessly pinched from: 
https://github.com/Ileriayo/markdown-badges

The starter code was part of the UC Berkeley Coding Bootcamp. I wrote the 
routing, and API that allows the "database" to create and delete notes. Much 
of the HTML was already made for me. This was mostly about learning how to make
an API with node.

## License
Copyright 2022

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Tests

Testing was done using the node package Jest, and the application Insomnia for
API calls/requests. 

There was only one custom class that was tested and that was for the notes. It
wasn't particularly complicated but it used an node package called 
[uuid](https://www.npmjs.com/package/uuid) to generate ID's for each note. 

UUIDs are a good way to ensure that ID's that are made don't collide, and can
persist through refreshes on the client side. 