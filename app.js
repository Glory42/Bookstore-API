// dependencies
const express = require('express');
const app = express();
const morgan = require('morgan');
require('dotenv').config();

// middleware
app.use(morgan('dev'));
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello User, Welcome to the BookStore');
});


// routes
const bookRouter = require('./routes/book');
app.use('/book', bookRouter);

const orderRouter = require('./routes/order');
app.use('/order', orderRouter);

const userRouter = require('./routes/user');
app.use('/user', userRouter);



const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on : ${port}`));