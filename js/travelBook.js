class TravelBook extends Book {
    constructor(bookName, author, numbPages, wrapType, id) {
        super(bookName, author, numbPages, id);
        this._wrapType = wrapType;
    }
    getFullInfo() {
        return `Book name: ${this._bookName}, author: ${this._author}, number of pages: ${this._numbPages}`
    }
    delBook(value) {
        Book.array.splice(value, 1);
    }
}