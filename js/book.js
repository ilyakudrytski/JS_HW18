class Book {
    constructor(bookName, author, numbPages, id) {

        this._bookName = bookName;
        this._author = author;
        this._id = id;
        this._numbPages = numbPages;
        this._id = ++Book.counter;
    }

    static counter = 0;
    static array = [];
}