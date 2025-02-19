let books = [
    { id: 0, title: 'Lord Of The Rings: Fellowship Of The Ring', Status: 'Here' },
    { id: 1, title: 'Dune', Status: 'Here' },
    { id: 2, title: 'Hitchhikers Guide To The Galaxy', Status: 'Sold Out' },
];

let orders = [
    { id: 0, userId: 1, bookId: 2, status: "Pending" },
    { id: 1, userId: 2, bookId: 0, status: "Shipped" },
    { id: 2, userId: 1, bookId: 1, status: "Delivered" }
];

let users = [
    { id: 0, username: "admin", password: "1234", isAdmin: true },
    { id: 1, username: "user1", password: "password1", isAdmin: false },
    { id: 2, username: "user2", password: "password2", isAdmin: false }
];




module.exports = { books, orders, users};