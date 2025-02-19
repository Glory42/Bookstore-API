## Project Structure
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