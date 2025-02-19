const express = require('express');

const isAdmin = (req, res, next) => {
    if(!req.user.isAdmin) return res.status(403).send('Admin access required');
    next();
};

module.exports = isAdmin;