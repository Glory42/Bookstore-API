const express = require('express');
const orderRouter = express.Router();
const authMiddleware = require('../middleware/auth');
const { getAllOrder, createOrder, getUserOrder } = require('../controllers/orderController');
const orders = require('../config/db');

orderRouter.get('/', authMiddleware, getAllOrder);

orderRouter.get('/my-orders', authMiddleware, getUserOrder);

orderRouter.post('/', authMiddleware, createOrder);


module.exports = orderRouter;