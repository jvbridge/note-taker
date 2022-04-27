const Note = require('../lib/note');

describe ("note", () => {
    it("should make sure that titles are strings", () => {
        const title = 0x242;
        const body = "Life before death, strength before weakness, journey before destination";
        expect(() => {new Note(title, body);}).toThrow();
    });

    it("should make sure that bodies are strings", () => {
        const title = "Life before death, strength before weakness, journey before destination";
        const body = 0x242;
        expect(() => {new Note(title, body);}).toThrow();
    });

    it("Should return the strings given", () => {
        const title = "First Oath";
        const body = "Life before death, strength before weakness, journey before destination";
        const oath = new Note(title, body);

        expect(oath.getTitle()).toEqual(title);
        expect(oath.getBody()).toEqual(body);
    });

    it("should check validity setter arguments", () => {
        const title = "First Oath";
        const body = "Life before death, strength before weakness, journey before destination";
        const oath = new Note(title, body);

        expect(() => {oath.setTitle(null);}).toThrow();
        expect(() => {oath.setBody(null);}).toThrow();
    });
});