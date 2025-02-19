const orders = require('../config/db');

const getAllOrder =  (req, res) => {
    if(!req.user.isAdmin) return res.status(403).send('Access denied');
    res.json(orders);
};

const getUserOrder = (req, res) => {
    const userOrder = orders.filter(order => order.userId === req.user.id);
    res.send(userOrder);
};

const createOrder = (req, res) => {
    const { bookId } = req.body;
    if(bookId === undefined) return res.status(400).send('Book ID is required.');

    const newOrder = {
        id: orders.length,
        userId: req.user.id,
        bookId,
        status: "Pending"
    };

    orders.push(newOrder);
    res.status(201).json(newOrder);
};

module.exports =  { getAllOrder, createOrder, getUserOrder, };