# Starter - CRUD API

This is your starting point for the CRUD API. A basic Express server is provided; you need to implement the full CRUD operations for a resource.

## What's Included

- Express server setup
- MongoDB connection
- Basic Mongoose model
- Empty route files

## What You Need to Build

### Required Features
1. Create a resource (POST)
2. Read all resources with pagination (GET)
3. Read single resource by ID (GET)
4. Update a resource (PUT/PATCH)
5. Delete a resource (DELETE)
6. Input validation on all endpoints
7. Consistent JSON response format

### Stretch Goals
- Search by field
- Sort results
- Filter by date range
- Soft delete with `deletedAt` field
- Bulk operations
- Caching layer

## Getting Started

```bash
git clone https://github.com/kari-dev/project-05-crud-api.git
cd project-05-crud-api
npm install
cp .env.example .env
npm run dev
```

API runs on `http://localhost:5000`.

## Tips

- Use Mongoose for data modeling and validation
- Create a consistent response helper function
- Test endpoints with Postman or Insomnia
- Handle 404 when resource not found
- Use proper HTTP methods and status codes
