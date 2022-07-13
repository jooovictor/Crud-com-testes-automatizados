import { app } from '../index.js'
import request from 'supertest'

const testBook = {
    id: '111',
    name: 'livro1',
    autor: 'eu mesmo'
}

const testBook1 = {
    id: '122',
    name: 'livro2',
    autor: 'João Victor'
}

it("Should create a book and add to list", async () => {
    const createBookResponse = await request(app).post('/').send(testBook)

    expect(createBookResponse.body).toEqual({ 
        name: 'livro1',
        status: "criado" 
    })
    expect(createBookResponse.status).toBe(200)

    const createBookResponse2 = await request(app).post('/').send(testBook1)

    expect(createBookResponse2.body).toEqual({ 
        name: 'livro2',
        status: "criado" 
    })
    
});

it('should list all books from the book list',async () => {
    const getBookResponse = await request(app).get('/')

    expect(getBookResponse.body).toHaveLength(2)
    expect(getBookResponse.status).toBe(200)
})

it('should delete a book from the book list', async () => {
    const bookDeleteResponse = await request(app).delete(`/${testBook.id}`)

    expect(bookDeleteResponse.body).toEqual(testBook)
    expect(bookDeleteResponse.status).toBe(200)
})

it('should update a book in the list', async () => {
    const updatedBook = {
        id: '122',
        name: 'livro2 parte 2',
        autor: 'João victor'
    }

    const updateBookResponse = await request(app).put(`/${testBook1.id}`).send(updatedBook)

    expect(updateBookResponse.status).toBe(200)
    expect(updateBookResponse.body).toEqual(updatedBook)


})




