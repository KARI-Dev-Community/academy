# Solution - CRUD API

This directory contains the complete reference implementation of the CRUD API.

## What's Included

- Full CRUD operations for a Book resource
- Input validation with express-validator
- Consistent JSON response format
- Error handling middleware
- Pagination and sorting
- Search functionality
- API documentation comments

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- express-validator for validation
- JSDoc for API documentation

## Running the Solution

```bash
git clone https://github.com/kari-dev/project-05-crud-api.git
cd project-05-crud-api/solution
npm install
cp .env.example .env
npm run dev
```

## API Endpoints

```
GET    /api/books          - List all books (paginated)
GET    /api/books/:id      - Get one book
POST   /api/books          - Create book
PUT    /api/books/:id      - Update book
DELETE /api/books/:id      - Delete book
GET    /api/books/search   - Search books
```

## Request/Response Examples

### Create Book
```json
POST /api/books
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "publishedYear": 1925,
  "genre": "Fiction"
}
```

### Response
```json
{
  "success": true,
  "data": {
    "id": "...",
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "publishedYear": 1925,
    "genre": "Fiction"
  }
}
```

## Key Concepts Demonstrated

- RESTful API design principles
- Mongoose schemas and validation
- Express middleware pipeline
- Consistent API response patterns
- HTTP status code usage
