# Step-by-Step Guide - JWT Auth System

Follow these steps to build the JWT authentication system.

## Step 1: Project Setup

```bash
mkdir jwt-auth && cd jwt-auth
npm init -y
npm install express mongoose jsonwebtoken bcrypt dotenv cors
npm install -D nodemon
```

Create the basic Express server in `src/app.js`.

## Step 2: Database Connection

1. Set up Mongoose connection to MongoDB
2. Create a User schema with name, email, password fields
3. Add timestamps and unique index on email

## Step 3: Password Hashing

1. Install bcrypt
2. Add a pre-save hook to hash passwords before saving
3. Create a method to compare passwords during login

```javascript
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
});
```

## Step 4: Registration Endpoint

1. Validate input (email format, password length)
2. Check if user already exists
3. Hash the password
4. Create and save user
5. Return user object (no password)

## Step 5: JWT Implementation

1. Install jsonwebtoken
2. Create a function to generate tokens
3. Add JWT to login response
4. Store secret key in .env

## Step 6: Protected Routes

1. Create auth middleware
2. Extract token from Authorization header
3. Verify token and attach user to request
4. Apply middleware to protected routes

## Step 7: Error Handling

1. Create centralized error handler
2. Return consistent error response format
3. Handle 401, 403, 404, 500 errors
4. Don't leak database errors to client

## Milestone Checklist

- [ ] Can register a new user
- [ ] Password is hashed in database
- [ ] Can login and receive JWT
- [ ] Protected routes return 401 without token
- [ ] Protected routes work with valid token
- [ ] Invalid tokens are rejected
