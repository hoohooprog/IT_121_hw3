/* 
    either a Book object or comment object, can be expanded to include Author object
    that has a collection of books as array or JSON in  a Author object
*/

// Book function template has properties that record the title, author, genre and summary as string objects
function Book(title, author, genre, summary){

    this.title = title;
    this.author = author;
    this.genre = genre;
    this.summary = summary;

    this.retTitle = function(){
        return this.title;
    };

    this.retAuthor = function(){
        return this.author;
    };

    this.retGenre = function(){
        return this.genre;
    };

    this.retSummary = function(){
        return this.summary;
    };

}

// would be nice to create real prompt and exceptionhandling to make sure user entered all the fields correctly

// creates 2 new book objects for testing
let book1 = new Book("Constantine", "frusciante", "funk horror", "ABC,123 etc");
let book2 = new Book("Liposuction: The definitive guide","Guru K", "medical","XYZ,123 etc");

// assigns element ids to their respective variables
let el_bookTitle = document.getElementById('titles_available');
let el_bookGenre = document.getElementById('genres_available');

/* display current collection of Titles and Genre in HTML elements assigned to variable by using innerHTML API, next iteration to write in by array */

el_bookTitle.innerHTML = `${book1.retTitle()}, author: ${book1.author}, summary: ${book1.summary}` + "</br>" 
            + `${book2.retTitle()}, author: ${book2.author}, summary: ${book1.summary}`;

el_bookGenre.innerHTML = book1.retGenre() + "</br>" + book2.retGenre();

