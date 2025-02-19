const users = require('../config/db');

const getAllUsers = (req, res) => {
    res.send(users);
};

const userRegister = (req, res) => {
    const { username, password, isAdmin} = req.body;
    if(!username || !password) return res.status(400).send('Username and password are required');

    const newUser = {
        id: users.length,
        username,
        password,
        isAdmin: isAdmin || false
    };

    users.push(newUser);
    res.status(201);
};

const userLogin =  (req, res) =>{
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if(!user) return res.status(401).send('Invalid username or password');

    const token = jwt.sign(
        { id: user.id, username: user.username, isAdmin: user.isAdmin },
        SECRET_KEY,
        { expiresIn: '1h'}
    );

    res.json({token});
};

module.exports = { getAllUsers, userRegister, userLogin };