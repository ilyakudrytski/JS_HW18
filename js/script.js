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

const travelForm = document.getElementById('books-travel');
const comicsForm = document.getElementById('books-comics');
const btnAddBook = document.querySelectorAll('input[type="submit"]');
let ulEl = document.getElementById('list-books');

btnAddBook[0].addEventListener('click', (event) => {
    event.preventDefault();
    renderBook(travelForm, TravelBook);

})

btnAddBook[1].addEventListener('click', (event) => {
    event.preventDefault();
    renderBook(comicsForm, Comics);
})

function renderBook(form, bookType) {
    let array = [];
    let input = form.querySelectorAll('input[type="text"]');

    input.forEach(elem => {
        array.push(elem.value);
    })

    let bookEl = new bookType(array[0], array[1], array[2], array[3], Book.counter);
    Book.array.push(bookEl);
    ulEl.innerHTML += `<ul>
                         <li>${bookEl._bookName}</li>
                         <li>${bookEl._author}</li>
                         <li><button id="${Book.counter + 'del'}" class="delete">удалить</button> <button id="${Book.counter}" class="info">подробнее</button></li>
                     </ul>`;
    form.reset();

    getInfo();
    deleteEl();

    console.log(Book.array)
}

function getInfo() {
    let btnInfo = document.querySelectorAll('.info');
    btnInfo.forEach(btn => {
        btn.addEventListener('click', () => {
            Book.array.forEach(elem => {
                if (Number(btn.id) === elem._id) {
                    alert(elem.getFullInfo());
                }
            })
        })
    })
}

function deleteEl() {
    let btnDelete = document.querySelectorAll('.delete');
    btnDelete.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('ul').remove();
            Book.array.map((elem, index) => {
                if (btn.id === elem._id + 'del') {
                    return elem.delBook(index);
                }
            })
        })
    })
}