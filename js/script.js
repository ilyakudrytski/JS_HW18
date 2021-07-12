/*1. Объявить класс под названием “Book”.
2. Класс “Book”. У каждой книги есть “название”, “автор”, “id”, “количество страниц”.
3. Класс “TravelBook”. У каждой новой книги есть: “название”, “автор”, “id”, “количество страниц”,
 “тип обложки”. Должен быть метод который выводит информацию о “названии”, “авторе”, “количестве страниц”.
 Должен быть метод удаления книги из списка.
3. Класс “Comics”. У каждой новой книги есть: “название”, “автор”, “id”, “количество страниц”, “номер выпуска”.
Должен быть метод который выводит информацию о “названии”, “авторе”, “количестве страниц”.
 Должен быть метод удаления книги из списка.
4. Внешний интерфейс должен быть следующим:
Слева все поля ввода которые отвечают за добавление новой книги от класса TravelBook;
Справа все поля ввода отвечающие за добавление новой книги от класса Comics;
Не важно какой тип книги мы добавляем, все они должны добавляться в один и тот же список книг.
На кнопку удалить (повесить функционал удаления книги).
На кнопку подробнее (вывести данные в модальном окне о “названии”, “авторе”, “количестве страниц”).*/

class Book {
    constructor(bookName, author, id, numbPages) {
        this._bookName = bookName;
        this._author = author;
        this._id = id;
        this._numbPages = numbPages;
        this._list = list;
    }
}

class TravelBook extends Book {
    constructor(bookName, author, id, numbPages, wrapType) {
        super(bookName, author, id, numbPages);
        this._wrapType = wrapType;
    }
    getFullInfo() {
        return `Book name: ${bookName}, author: ${author}, number of pages: ${numbPages}`
    }
    delete(key) {
        delete this._list[key];
    }
}

class Comics extends Book {
    constructor(bookName, author, id, numbPages, issueNumber) {
        super(bookName, author, id, numbPages);
        this._issueNumber = issueNumber;
    }
    getFullInfo() {
        return `Comics name: ${bookName}, author: ${author}, number of pages: ${numbPages}`
    }
}

const travelBookName = document.getElementById('title');
const travelBookAuthor = document.getElementById('author');
const travelBookPages = document.getElementById('count');
const travelBookWrap = document.getElementById('type-wrapper');

const comicsName = document.getElementById('title-c');
const comicsAuthor = document.getElementById('author-c');
const comicsPages = document.getElementById('count-c');
const comicsNumber = document.getElementById('type-wrapper-c');