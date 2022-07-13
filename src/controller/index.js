export let listOfBooks = []

export class BookControler {
    static addBook (book)  {

        listOfBooks.push(book)

        return  {
            status: 'criado'
        }
    }

    static listBooks() {
        return listOfBooks
    }

    static deleteBook(bookId) {
        const deletedBook = listOfBooks.find((book) => book.id === bookId);
        const newBooks = listOfBooks.filter((books) => books.id !== bookId);

        listOfBooks = newBooks

        return deletedBook;
    }

    static updateBook(bookId, bookToUpdate) {
        const newBooks = listOfBooks.filter((book) => book.id !== bookId)
        listOfBooks = [...newBooks, bookToUpdate]
        return bookToUpdate;
    }
}