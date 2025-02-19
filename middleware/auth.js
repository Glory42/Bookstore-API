const express = require('express');
const jwt = require('jsonwebtoken');


const authMiddleware = (req, res, next) =>{
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startWith('Bearer')) return res.status(403).send('Access denied. No token provided.');

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.SECRETKEY);
        req.user = decoded;
        next();
    } catch {
        return res.status(401).send('Invalid token');
    }
};

module.exports = authMiddleware;