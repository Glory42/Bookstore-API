const express = require('express');
const bookRouter = express.Router();
const { getAllBook, createBook, updateBook, deleteBook, getAbook } = require('../controllers/bookController');
const authMiddleware = require('../middleware/auth');
const isAdmin = require('../middleware/isAdmin');
const books = require('../config/db');




// custome middleware find book by id
bookRouter.param('id', (req, res, next, id) => {
    const bookId = parseInt(id); 
    const book = books.find(b => b.id === bookId);
    if(!book) return res.status(404).send('Book not found');
    req.book = book;
    next();
});

bookRouter.get('/', getAllBook);


bookRouter.post('/', authMiddleware, isAdmin, createBook);

bookRouter.route('/:id')
    .get(getAbook)
    .put(authMiddleware, isAdmin, updateBook)
    .delete(authMiddleware, isAdmin, deleteBook);

module.exports = bookRouter;