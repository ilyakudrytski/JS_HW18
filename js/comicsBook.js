class Comics extends Book {
    constructor(bookName, author, numbPages, issueNumber, id) {
        super(bookName, author, numbPages, id);
        this._issueNumber = issueNumber;
    }
    getFullInfo() {
        return `Comics name: ${this._bookName}, author: ${this._author}, number of pages: ${this._numbPages}`
    }
    delBook(value) {
        Book.array.splice(value, 1);
    }

}