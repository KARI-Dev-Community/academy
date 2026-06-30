# Starter - JWT Auth System

This is your starting point for the JWT authentication system. A basic Express server structure is provided; you need to implement the authentication logic.

## What's Included

- Express server setup with basic routes
- MongoDB connection placeholder
- User model schema
- Basic project structure

## What You Need to Build

### Required Features
1. User registration with email and password
2. Password hashing with bcrypt
3. User login returning JWT access token
4. Protected route middleware
5. Get current user profile endpoint
6. Input validation and error handling

### Stretch Goals
- Refresh token implementation
- Role-based access (user/admin)
- Email verification
- Password reset flow
- Rate limiting on auth endpoints
- Token blacklist for logout

## Getting Started

```bash
git clone https://github.com/kari-dev/project-04-jwt-auth-system.git
cd project-04-jwt-auth-system
npm install
cp .env.example .env
npm run dev
```

Server runs on `http://localhost:5000`.

## Tips

- Never store plain text passwords
- Use `bcrypt.hash()` with salt rounds of 10+
- Store JWT secret in environment variables
- Test with Postman or Thunder Client
- Always validate and sanitize user input
