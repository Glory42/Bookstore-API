# 📚 Bookstore API

## 📌 Description 
🚀 *Bookstore API* is a backend system designed to manage an online bookstore. It provides 🛒 order management, 📖 book listings, and 🔐 user authentication. Built with **Express.js**, it ensures secure and efficient operations.

## 🎯 Objective  
Develop a scalable API for managing books, users, and orders in an online bookstore.

## 🚀 Key Features  
- 📖 **Book management** (add, update, delete books)
- 🔐 **User authentication** (register, login, admin roles)
- 🛒 **Order processing** (place, track orders)
- 📦 **Inventory management**
- 🛠 **Middleware for authentication and error handling**

## 🏗 Steps to Build  
1️⃣ **Set up the project**: Install dependencies and initialize the app.  
2️⃣ **Database connection**: Configure **PostgreSQL/MongoDB** (if applicable).  
3️⃣ **Define routes**: Create routes for books, users, and orders.  
4️⃣ **Implement controllers**: Handle business logic for each feature.  
5️⃣ **Add authentication**: Secure endpoints with JWT.  
6️⃣ **Build middleware**: Add authentication, admin checks, and error handling.  

## 🛠 Technologies Used  
- **Backend Framework**: Express.js  
- **Database**: PostgreSQL/MongoDB (depending on implementation)  
- **Authentication**: JWT  
- **Middleware**: Custom authentication and error handling  

## 📂 Project Structure  
```bash
bookstore-api/  
├── .env                 # Environment variables (keep secrets here)
├── .env.example         # Example env file (template for users)
├── .gitignore           # Files/folders to exclude from Git
├── app.js               # Main entry point
├── package.json         # Dependencies and scripts
│
├── config/              # Configuration files (e.g., database setup)
│   └── db.js            # Database connection logic (if using a DB)
│
├── routes/              # All route definitions
│   ├── books.js         # Book-related routes
│   ├── users.js         # User/auth routes
│   └── orders.js        # Order routes
│
├── controllers/         # Logic for handling routes
│   ├── bookController.js
│   ├── userController.js
│   └── orderController.js
│
├── middleware/          # Custom middleware
│   ├── auth.js          # Authentication middleware
│   ├── errorHandler.js  # Global error handling
│   └── isAdmin.js       # Checking admin
│
└── utils/               # Helper functions (optional)
    └── logger.js        # Logging utility
```

## 📌 API Endpoints  
| ⚡ Method | 🔗 Endpoint       | 📝 Description |
|--------|--------------|-------------|
| POST   | /auth/register | 🆕 User registration |
| POST   | /auth/login | 🔑 User login |
| GET    | /books | 📖 Get all books |
| POST   | /books | ➕ Add a book (Admin only) |
| PUT    | /books/:id | ✏️ Update book details (Admin only) |
| DELETE | /books/:id | ❌ Delete a book (Admin only) |
| POST   | /orders | 🛒 Place an order |
| GET    | /orders/:id | 📦 Get order details |

## 📚 Concepts Learned  
- 🔐 **JWT authentication** for secure access.  
- 📊 **Database management** for storing books and orders.  
- ⚡ **Middleware functions** for authentication and error handling.  
- 🏗 **API design best practices** for scalability.  

## 🤝 Contributing  
Contributions are welcome! Open an issue or submit a pull request.  

## 📜 License  
This project is licensed under the MIT License.