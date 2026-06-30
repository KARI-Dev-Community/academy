# Solution - JWT Auth System

This directory contains the complete reference implementation of the JWT authentication system.

## What's Included

- User registration and login
- Password hashing with bcrypt
- JWT access token generation and verification
- Protected route middleware
- Role-based access control
- Input validation with express-validator
- Error handling middleware
- environment configuration

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT (jsonwebtoken)
- bcrypt for password hashing
- express-validator for input validation

## Running the Solution

```bash
git clone https://github.com/kari-dev/project-04-jwt-auth-system.git
cd project-04-jwt-auth-system/solution
npm install
cp .env.example .env
npm run dev
```

## API Endpoints

```
POST   /api/auth/register  - Register new user
POST   /api/auth/login     - Login and get tokens
GET    /api/auth/me        - Get current user (protected)
```

## Project Structure

```
solution/
├── src/
│   ├── models/
│   │   └── User.js
│   ├── middleware/
│   │   ├── auth.js
│   │   └── error.js
│   ├── routes/
│   │   └── auth.js
│   ├── controllers/
│   │   └── authController.js
│   ├── utils/
│   │   └── generateToken.js
│   └── app.js
├── .env.example
└── README.md
```

## Key Concepts Demonstrated

- JWT structure (header, payload, signature)
- Password hashing best practices
- Authentication middleware pattern
- Error handling in Express
- Environment configuration for secrets
