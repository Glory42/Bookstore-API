const express = require('express');
const userRouter = express.Router();
const jwt = require('jsonwebtoken');
const users = require('../config/db');
const { getAllUsers, userRegister, userLogin } = require('../controllers/userController');

const SECRET_KEY = process.env.JWT_SECRET;

userRouter.get('/', getAllUsers);

userRouter.post('/register', userRegister);

userRouter.post('/login', userLogin);

module.exports = userRouter;