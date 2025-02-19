const express = require('express');
const bookRouter = express.Router();

let books = [
    { id: 0, title: 'Lord Of The Rings: Fellowship Of The Ring', Status: 'Here' },
    { id: 1, title: 'Dune', Status: 'Here' },
    { id: 2, title: 'Hitchhikers Guide To The Galaxy', Status: 'Sold Out' },
]

// custome middleware find book by id
bookRouter.param('id', (req, res, next, id) => {
    const bookId = parseInt(id); 
    const book = books.find(b => b.id === bookId);
    if(!book) return res.status(404).send('Book not found');
    req.book = book;
    next();
});

bookRouter.get('/', (req, res) => {
    res.send({
        tilte: 'BookStore',
        books,
    });
});


bookRouter.post('/', (req, res) =>{
    const {title} = req.body;
    if(!title) return res.status(400).send('Title is required');
    const newBook = {id: books.length + 1, title, status: 'Here'};
    books.push(newBook);
    res.redirect('/book');
});

bookRouter.route('/:id')
    .get((req, res) => {
        res.send({book: req.book});
    })
    .put((req, res) => {
        const updatedBook = {
            id: req.book.id,
            title: req.body.title || req.book.title,
            Status: req.body.Status || req.book.Status
        };
        const bookIndex = books.findIndex(b => b.id === updatedBook.id);
        books[bookIndex] = updatedBook;
        res.redirect('/book');
    })
    .delete((req, res) => {
        books = books.filter(b => b.id !== req.book.id);
        res.redirect('/book');
    });

module.exports = bookRouter;