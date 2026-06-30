# Backend Guides

Backend development powers the server, database, and application logic that users don't see but rely on.

## Node.js

Node.js runs JavaScript on the server.

### Module System

```javascript
// math.js
export function add(a, b) {
  return a + b;
}

// app.js
import { add } from "./math.js";
console.log(add(2, 3));
```

### File System

```javascript
import fs from "fs/promises";

async function readJson(filePath) {
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}
```

### HTTP Server

```javascript
import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200);
    res.end("Hello, World!");
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

## Express.js

Express simplifies building APIs and web servers.

### Basic Setup

```javascript
import express from "express";

const app = express();
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

### Middleware

```javascript
function logger(req, res, next) {
  console.log(`${req.method} ${req.path}`);
  next();
}

app.use(logger);

function authenticate(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: "Missing token" });
  }
  next();
}
```

### Error Handling

```javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong" });
});
```

## REST APIs

### Standard Endpoints

```
GET    /api/users      - List users
POST   /api/users      - Create user
GET    /api/users/:id  - Get one user
PUT    /api/users/:id  - Update user
DELETE /api/users/:id  - Delete user
```

### Response Format

```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

### Error Format

```json
{
  "success": false,
  "error": "User not found"
}
```

## Authentication

### JWT Basics

```javascript
import jwt from "jsonwebtoken";

function generateToken(userId) {
  return jwt.sign(
    { userId },
    process.env.JWT_SECRET,
    { expiresIn: "24h" }
  );
}
```

### Password Hashing

```javascript
import bcrypt from "bcrypt";

const hashedPassword = await bcrypt.hash("password123", 10);
const isValid = await bcrypt.compare("password123", hashedPassword);
```

## Related Projects

- [Project 04: JWT Auth System](../projects/jwt-auth-system.md)
- [Project 05: CRUD API](../projects/crud-api.md)
- [Project 06: Mini Ecommerce](../projects/mini-ecommerce.md)
