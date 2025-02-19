const books = require('../config/db');

const getAllBook = (req, res) => {
    res.json(books);
};

const createBook = (req, res) =>{
    const {title} = req.body;
    if(!title) return res.status(400).send('Title is required');
    const newBook = {id: books.length + 1, title, status: 'Here'};
    books.push(newBook);
    res.redirect('/book');
};

const getAbook = (req, res) => {
    res.send({book: req.book});
};

const updateBook = (req, res) => {
    const updatedBook = {
        id: req.book.id,
        title: req.body.title || req.book.title,
        Status: req.body.Status || req.book.Status
    };
    const bookIndex = books.findIndex(b => b.id === updatedBook.id);
    books[bookIndex] = updatedBook;
    res.redirect('/book');
};

const deleteBook = (req, res) => {
    books = books.filter(b => b.id !== req.book.id);
    res.redirect('/book');
};



module.exports = { getAllBook, createBook, updateBook, deleteBook, getAbook };