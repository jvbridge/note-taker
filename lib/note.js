const {v4: uuid} = require('uuid');

/**
 * A note class for holding note data. Easily added to JSON.
 */
class Note {
    
    /**
     * @param {string} title - the title text of the note 
     * @param {string} text - the body text of the note 
     */
    constructor (title, text) {
        if (typeof title !== 'string'){
            throw new TypeError(`Expected a string for the title got ${title} instead`);
        }
        
        if (typeof text !== 'string'){
            throw new TypeError(`Expected a string for the title got ${text} instead`);
        }

        this.title = title;
        this.text = text;
        this.id = uuid();
    }

    
    /**
     * Getter for the body text of the note
     * @returns {string}
     */
    getBody () {
        return this.text;
    }

    /**
     * Setter for the body text of the note
     * @param {string} text 
     */
    setBody (text) {
        if (typeof text !== 'string'){
            throw new TypeError(`Expected a string for the body got ${text} instead`);
        }
        this.text = text;
    }

    /**
     * Getter for the title text of the note
     * @returns {string}
     */
    getTitle () {
        return this.title;
    }

    /**
     * Setter for the title text of the note
     * @param {string} text 
     */
    setTitle (text) {
        if (typeof text !== 'string'){
            throw new TypeError(`Expected a string for the title got ${text} instead`);
        }
        this.title = text;
    }

    getId() {
        return this.id;
    }
}

module.exports = Note;