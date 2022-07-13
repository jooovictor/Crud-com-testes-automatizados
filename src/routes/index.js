import { Router } from "express";
import { BookControler } from "../controller/index.js";

export const routes = new Router()

routes.post('/', (req, res) => {
    const book = req.body
    BookControler.addBook(book)

    res.send({
        name: book.name,
        status: "criado"
    });
});

routes.get('/', (req, res) => {
    res.send(BookControler.listBooks());
});

routes.delete('/:id', (req, res) => {
    const bookId = req.params.id
    res.send(BookControler.deleteBook(bookId))
})

routes.put('/:id', (req, res) => {
    const bookId = req.params.id
    const bookToUpdate = req.body
    res.send(BookControler.updateBook(bookId, bookToUpdate))
})

