# Kari Dev - JWT Auth System Skill

## Project Identity

You are working on **JWT Auth System** for the Kari Dev learning community.

A secure authentication system using JSON Web Tokens.

## Learning Objectives

- Implement JWT authentication
- Hash passwords securely
- Protect routes with middleware
- Handle refresh tokens

## Three Tiers

### Starter (beginner)
- **Focus**: Core frontend concepts, no backend required
- **Stack**: Express.js, MongoDB, basic project structure
- Build the UI and core logic following the step-by-step guide

### Sample (full-stack reference)
- **Stack**: React 18 + TypeScript + TailwindCSS + Vite (frontend), NestJS + TypeScript (backend), Docker + Docker Compose
- Dockerized full-stack app with `docker compose up --build`
- Demonstrates production-ready patterns: API integration, state management, CORS, environment config

### Solution (reference implementation)
- **Stack**: Node.js, Express.js, MongoDB, JWT, bcrypt, express-validator
- Complete working implementation with best practices
- Key file structure: `src/{models,middleware,routes,controllers,utils}/, app.js, .env.example`
- Demonstrates: JWT structure (header, payload, signature), Password hashing best practices, Authentication middleware pattern, Error handling in Express, Environment configuration for secrets

## Core Domain Concepts

- User schema: name, email, password, timestamps
- JWT structure: header (algorithm), payload (claims), signature
- Access tokens (short-lived) and refresh tokens (long-lived)
- bcrypt salt rounds (10+) for password hashing
- Authorization header: Bearer <token>
- express-validator for input sanitization
- Role-based access control (RBAC)

## Step-by-Step Milestones

- [ ] Can register a new user
- [ ] Password is hashed in database
- [ ] Can login and receive JWT
- [ ] Protected routes return 401 without token
- [ ] Protected routes work with valid token
- [ ] Invalid tokens are rejected

## Contribution Guidelines

### What You Can Improve
- Add email verification flow
- Implement role-based access control (RBAC)
- Add password reset functionality
- Create rate limiting middleware
- Add input validation with Joi or Zod
- Write integration tests with Supertest
- Add API documentation with Swagger

### Pull Request Requirements
- All endpoints return correct status codes
- Passwords are never logged or returned in responses
- Tokens expire correctly
- Error messages don't leak sensitive information
- Tests pass

## Starter Features

### Required
- User registration with email and password
- Password hashing with bcrypt
- User login returning JWT access token
- Protected route middleware
- Get current user profile endpoint
- Input validation and error handling

### Stretch Goals
- Refresh token implementation
- Role-based access (user/admin)
- Email verification
- Password reset flow
- Rate limiting on auth endpoints
- Token blacklist for logout

## Sample Project Structure

```
sample/
├── frontend/          # React + Vite app
│   ├── src/
│   │   ├── main.tsx   # Entry point
│   │   ├── App.tsx    # Main component with API call
│   │   └── index.css  # TailwindCSS
│   ├── Dockerfile
│   └── package.json
├── backend/           # NestJS app
│   ├── src/
│   │   ├── main.ts    # Nest bootstrap
│   │   ├── app.module.ts
│   │   ├── app.controller.ts
│   │   └── app.service.ts
│   ├── Dockerfile
│   └── package.json
├── docker-compose.yml
└── README.md
```

## Key Implementation Notes

Starter/solution use plain Express+MongoDB. Sample adds React+NestJS+Docker. Solution uses express-validator.

## Relevant Files

- `docs/README.md` - Step-by-step learning guide
- `starter/README.md` - Beginner starting point and requirements
- `solution/README.md` - Reference implementation details
- `CONTRIBUTING.md` - Contribution requirements and ideas
- `sample/README.md` - Full-stack sample overview
