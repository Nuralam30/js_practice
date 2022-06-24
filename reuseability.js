
// reuseability.js

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.summary = function () {
            console.log(`${this.title} is written by ${this.author}.`);
        };
    }
}
 
 const book1 = new Book ('Hippie', 'Paulo Coelho', '2018');
 book1.summary();

 const book2 = new Book ('The Alchemist', 'Paulo Coelho', '1988');
 book2.summary();